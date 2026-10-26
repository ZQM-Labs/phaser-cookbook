# Phaser Cookbook

<!-- ZQM-START -->
<!-- markdownlint-disable MD033 -->
<p align="center">
  <strong>ZQM Labs</strong><br>
  <a href="https://github.com/ZQM-Labs">ZQM Labs</a>
</p>
<!-- markdownlint-enable MD033 -->
<!-- ZQM-END -->

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A **Phaser cookbook** for browser-game scenes, sprites, input, and asset pipelines. Patterns target small, touch-friendly web games and quest-style experiences. Examples should be runnable, version-aware, and honest about what has and has not been tested.

## Repository role and status

**Status:** Active, public — first scene example and static contract tests added. The pattern list distinguishes implemented content from planned work.

**What this repository is:** Phaser patterns for scene lifecycle, interaction, animation, and web asset delivery.

**What it contributes:** Part of the ZQM Labs game-development portfolio. It complements ZQM Computing's geospatial cookbook series by focusing on the playable client, input, and rendering.

**Quality bar:** Keep examples minimal, include keyboard and touch paths where applicable, provide DOM-level instructions/status for canvas interactions, and test the contract. A deterministic runtime harness exercises input/state behavior in Node.js; it does not replace a real browser/device smoke test.

## Who this is for

Web game developers building playable browser games, especially map-based and quest-style games.

## Prerequisites

- Node.js 20+ for example contract tests
- Python 3 or another static file server for the first-scene example
- Phaser 3.90.0 CDN access for the demo; production projects should use a reviewed, pinned local dependency and their normal content-security policy

## Patterns

### 01 — First playable scene (implemented)

[Open the example](examples/01-scene-setup/). Includes one scene, responsive canvas scaling, pointer/touch and keyboard activation, DOM live status, a library-load failure message, and static contract tests.

### 02 — Sprite animation (planned)

Sprite sheets, animation definitions, and frame control from WebP/PNG atlases.

### 03 — Mobile input (planned)

Touch and mouse input that remains usable across phone and desktop viewports.

### 04 — Asset pipeline (planned)

Asset loading, caching, versioning, and reproducible web delivery.

## Quick start

From the repository root:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/examples/01-scene-setup/`. Click or tap the game area, or press Enter or Space. For static contract checks:

```sh
cd examples/01-scene-setup
npm test
```

## Repository layout

```text
phaser-cookbook/
├── .github/workflows/examples.yml
├── examples/
│   └── 01-scene-setup/
│       ├── index.html
│       ├── game.js
│       ├── style.css
│       ├── package.json
│       ├── scene-contract.test.mjs
│       ├── runtime-contract.test.mjs
│       └── README.md
├── README.md
└── LICENSE
```

## Engineering principles

- Separate boot/preload/create responsibilities as examples grow.
- Provide keyboard alternatives to pointer-only interactions.
- Keep instructions and important state available in the DOM, not only on the canvas.
- Pin dependency versions and explain CDN versus bundled dependency trade-offs.
- Keep client state separate from authoritative purchase, entitlement, or score decisions.
- Clearly distinguish static contract checks from browser-level rendering validation.

## Roadmap

1. Add a sprite-animation example with a generated/test fixture atlas.
2. Add a shared input abstraction and viewport-focused tests.
3. Add a cache/versioning recipe for game assets and offline updates.
4. Expand browser smoke coverage when a stable browser test environment is available.

## Contributing

Each pattern should include a runnable example, exact test commands, tested versions, known limitations, and keyboard/touch considerations. Report security issues to <zqmcomputing@gmail.com> — please do not open a public issue for those.
