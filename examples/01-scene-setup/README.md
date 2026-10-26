# 01 — First playable scene

A minimal Phaser 3 browser game with a scene lifecycle, responsive canvas, pointer/touch and keyboard input, a DOM-based live status message, and a visible failure message if Phaser fails to load.

## Run locally

Requires Python 3 (for a static server) and network access to the pinned Phaser CDN script:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/examples/01-scene-setup/` from the repository root. Click or tap the game area, or press Enter or Space. The counter should advance and the adjacent live status should update.

The CDN URL is pinned to Phaser 3.90.0 to avoid an unbounded `latest` dependency. For production, prefer a reviewed, lockfile-pinned local package/bundle and your normal content-security policy rather than treating a public CDN as a trusted build step.

## Files

- `index.html` — document structure, pinned Phaser script, instructions, and status region.
- `game.js` — one scene, a simple drawn character, counter state, input handling, and responsive scaling.
- `scene-contract.test.mjs` — source-level contract checks.
- `runtime-contract.test.mjs` — executes the scene against a deterministic Phaser/DOM harness and verifies pointer/keyboard activation and library-load failure behavior.
- `style.css` — responsive page layout and visible status.

## Design notes

- Keep DOM instructions and status outside the canvas so screen-reader users are not forced to infer all state from pixels.
- Provide pointer and keyboard controls; do not make touch the only interaction.
- Keep the game scene small and deterministic before adding assets, transitions, or persistence.
- Treat the counter as presentation state only. A client-side game state must not be used as proof of payment, entitlement, or trusted score.
- `npm test` runs both source-level checks and a deterministic Node.js runtime harness. The harness exercises scene behavior but does not load the real Phaser library, render a canvas, or validate browser/device layout. Perform a browser smoke test before adopting it in a real game.
