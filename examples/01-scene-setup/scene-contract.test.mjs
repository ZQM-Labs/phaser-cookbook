import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const game = readFileSync(new URL("./game.js", import.meta.url), "utf8");
const css = readFileSync(new URL("./style.css", import.meta.url), "utf8");

test("HTML pins Phaser and loads the scene from an external script", () => {
  assert.match(html, /phaser@3\.90\.0\/dist\/phaser\.min\.js/);
  assert.match(html, /src="\.\/game\.js"/);
  assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>/i);
});

test("scene provides pointer and keyboard activation plus live status", () => {
  assert.match(game, /pointerdown/);
  assert.match(game, /keydown-ENTER/);
  assert.match(game, /keydown-SPACE/);
  assert.match(game, /aria-label/);
  assert.match(game, /status\.textContent/);
  assert.match(html, /aria-live="polite"/);
});

test("scene is responsive and reports a library-load failure", () => {
  assert.match(game, /Phaser\.Scale\.FIT/);
  assert.match(game, /Phaser library did not load/);
  assert.match(css, /aspect-ratio:\s*16\s*\/\s*9/);
});
