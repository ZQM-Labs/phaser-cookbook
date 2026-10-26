import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const gameSource = readFileSync(new URL("./game.js", import.meta.url), "utf8");

function createPhaserHarness() {
  const status = { textContent: "" };
  const handlers = new Map();
  const keyboardHandlers = new Map();
  const textNodes = [];
  const canvasAttributes = {};
  let gameConfig;

  class Scene {
    constructor(key) {
      this.key = key;
    }
  }

  class Game {
    constructor(config) {
      gameConfig = config;
      const scene = new config.scene[0]();
      scene.activations = 0;
      scene.scale = { width: config.width, height: config.height };
      scene.cameras = { main: { setBackgroundColor() {} } };
      scene.add = {
        circle() { return {}; },
        arc() { return { setStrokeStyle() { return this; } }; },
        text(_x, _y, initialText) {
          const node = {
            text: initialText,
            setOrigin() { return this; },
            setText(value) { this.text = value; },
          };
          textNodes.push(node);
          return node;
        },
      };
      scene.input = {
        on(name, callback) { handlers.set(name, callback); },
        keyboard: {
          on(name, callback) { keyboardHandlers.set(name, callback); },
        },
      };
      scene.sys = {
        game: { canvas: { setAttribute(name, value) { canvasAttributes[name] = value; } } },
      };
      scene.create();
      this.scene = scene;
    }
  }

  const Phaser = {
    Scene,
    Game,
    AUTO: "AUTO",
    Scale: { FIT: "FIT", CENTER_BOTH: "CENTER_BOTH" },
  };
  return { Phaser, status, handlers, keyboardHandlers, textNodes, canvasAttributes, getConfig: () => gameConfig };
}

test("scene creates an accessible canvas and activation updates visible state", () => {
  const harness = createPhaserHarness();
  runInNewContext(gameSource, {
    document: { getElementById: (id) => id === "game-status" ? harness.status : null },
    Phaser: harness.Phaser,
  });

  assert.equal(harness.status.textContent, "Game ready. Activations: 0.");
  assert.equal(harness.canvasAttributes.role, "img");
  assert.match(harness.canvasAttributes["aria-label"], /Enter, Space, click, or tap/);
  assert.equal(harness.getConfig().scale.mode, "FIT");
  assert.equal(harness.getConfig().scale.autoCenter, "CENTER_BOTH");

  const counter = harness.textNodes.find((node) => node.text === "Activations: 0");
  assert.ok(counter, "initial activation counter should exist");

  harness.handlers.get("pointerdown")();
  assert.equal(counter.text, "Activations: 1");
  assert.equal(harness.status.textContent, "Game ready. Activations: 1.");

  harness.keyboardHandlers.get("keydown-ENTER")();
  harness.keyboardHandlers.get("keydown-SPACE")();
  assert.equal(counter.text, "Activations: 3");
  assert.equal(harness.status.textContent, "Game ready. Activations: 3.");
});

test("scene fails clearly when the Phaser library is unavailable", () => {
  const status = { textContent: "" };
  runInNewContext(gameSource, {
    document: { getElementById: () => status },
  });
  assert.match(status.textContent, /Phaser library did not load/);
});
