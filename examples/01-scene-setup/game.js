(() => {
  "use strict";

  const status = document.getElementById("game-status");

  if (typeof Phaser === "undefined") {
    status.textContent = "The Phaser library did not load. Check the network connection and reload.";
    return;
  }

  class MainScene extends Phaser.Scene {
    constructor() {
      super("main");
      this.activations = 0;
    }

    create() {
      this.cameras.main.setBackgroundColor("#171923");

      const { width, height } = this.scale;
      this.add.circle(width / 2, height / 2 - 42, 64, 0x8b5cf6);
      this.add.circle(width / 2 - 25, height / 2 - 52, 8, 0xffffff);
      this.add.circle(width / 2 + 25, height / 2 - 52, 8, 0xffffff);
      this.add.arc(width / 2, height / 2 - 32, 22, 20, 160, false, 0xffffff)
        .setStrokeStyle(4, 0xffffff);

      this.counterText = this.add.text(width / 2, height / 2 + 58, "Activations: 0", {
        fontFamily: "system-ui, sans-serif",
        fontSize: "26px",
        color: "#ffffff",
      }).setOrigin(0.5);

      this.add.text(width / 2, height / 2 + 102, "Tap / click / Enter / Space", {
        fontFamily: "system-ui, sans-serif",
        fontSize: "16px",
        color: "#cbd5e1",
      }).setOrigin(0.5);

      this.input.on("pointerdown", () => this.advance());
      if (this.input.keyboard) {
        this.input.keyboard.on("keydown-ENTER", () => this.advance());
        this.input.keyboard.on("keydown-SPACE", () => this.advance());
      }

      this.sys.game.canvas.setAttribute("role", "img");
      this.sys.game.canvas.setAttribute("aria-label", "Phaser demo game area. Use Enter, Space, click, or tap to advance the counter.");
      status.textContent = "Game ready. Activations: 0.";
    }

    advance() {
      this.activations += 1;
      this.counterText.setText(`Activations: ${this.activations}`);
      status.textContent = `Game ready. Activations: ${this.activations}.`;
    }
  }

  new Phaser.Game({
    type: Phaser.AUTO,
    parent: "game-root",
    width: 800,
    height: 450,
    backgroundColor: "#171923",
    scene: [MainScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    render: {
      antialias: true,
      pixelArt: false,
    },
  });
})();
