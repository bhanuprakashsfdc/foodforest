# Tirupati Food Forest

A design reference website for a **220 × 198 ft (43,560 sq ft)** food forest in Tirupati, Rayalaseema, Andhra Pradesh, planned on the **Subhash Palekar Natural Farming five-layer model** with one indigenous cow. It turns a paper design document into an interactive, accessible web experience — every diagram, crop score, and yield number is visible on the site.

Built with **Next.js 16 (App Router) + React 19 + TypeScript**, rendered with a hand-crafted CSS design system inspired by the land: deep forest green, rice-paper cream, laterite red, turmeric gold, and pond blue.

## What you can see on the site

- **Overview** — plot facts, design goals, yield snapshot, and the seasonal rhythm of the farm year
- **Master Plan** — a full SVG farm map with zones, a cross-section of the planting layers, a growth timeline, and placement/size tables for every zone
- **Five Layers** — Palekar's five-layer plan drawn to scale (emergent → canopy → small trees → shrubs → ground/climbers), with tree heights in feet and the complete crop list per layer
- **Crop Directory** — climate scores, sun/water needs, and trial notes for every crop
- **Harvest Calendar** — interactive month-by-month harvest windows
- **Water & Soil** — a drip-irrigation flow diagram with the system's tank, line, and drip-emitter tables
- **Self-Sufficiency** — how land, labor, the cow, and the kitchen feed each other

## Highlights

- **Custom SVG diagrams** — all charts (farm map, five-layer plan, cross-section, growth timeline, drip flow) are hand-drawn SVG with a shared palette, `role="img"` accessibility labels, and `aria-hidden` decoration
- **Data-driven content** — every page is generated from typed content modules, so the crop list, scores, and tables stay consistent across the site
- **Pure-CSS interactivity** — hovering a layer row lights up the matching band on the edge-of-screen ribbon, with no JavaScript needed
- **Fully static** — all routes prerender at build time for fast, cache-friendly delivery
- **Design system** — custom tokens for color, type (Fraunces + Work Sans), and layout in one CSS file, no UI framework

> **Disclaimer** — This is a design reference document. Verify spacing, water volumes, and yield estimates on-site before construction. It is not agronomic or engineering advice.
