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

A **Phaser cookbook** for web game scenes, sprites, input, and asset pipelines. Patterns are written for browser games in the style of ZQM Labs' location games: small scenes, touch-friendly input, and WebP art. It is intended for web game developers building playable browser games. Validate each pattern against your own game, Phaser version, and operating environment before adopting it.

## Repository role and status

**Status:** Active, public — seeding. Pattern passes land in follow-up work; the table below lists what is planned, not what is already written.

**What this repository is:** Phaser patterns — scenes, sprites, input, and asset pipelines for web games.

**What it contributes:** Part of the ZQM Labs game-development portfolio, and a sibling to the ZQM Computing geospatial cookbook series.

**Standing:** This repository is maintained independently. Automated checks cover only the paths and environments configured in its workflows; they do not establish production readiness or operational certification.

## Who this is for

Web game developers building playable browser games, especially map-based and quest-style games.

## Prerequisites

- Node.js and a static file server or dev server
- Phaser 3 (version pinned per pattern at fill time)
- WebP-capable art assets (see the art pipeline pattern)

## Patterns (planned)

| # | Example | What it will demonstrate |
|---|---------|--------------------------|
| 01 | `01-scene-setup` | Boot, preload, and create scenes with a minimal playable loop |
| 02 | `02-sprite-animation` | Sprite sheets, animations, and frame control from WebP/PNG atlases |
| 03 | `03-input-mobile` | Touch and mouse input that plays the same on phone and desktop |
| 04 | `04-asset-pipeline` | Loading, caching, and versioning game art for web delivery |

## Repository layout

```text
phaser-cookbook/
├── examples/  # one directory per pattern
├── README.md
└── LICENSE
```

## Roadmap

- First pattern pass: scene setup (01), then sprite animation (02)
- Second pass: input (03) and asset pipeline (04)

## Contributing

A contributing guide lands with the first pattern pass. Report security issues to <zqmcomputing@gmail.com> — please do not open a public issue for those.
