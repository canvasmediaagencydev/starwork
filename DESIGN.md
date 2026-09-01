---
version: alpha
name: StarWork Chiang Mai Official CI
description: Official visual identity extracted from the user-approved StarWork Chiang Mai logo.
colors:
  primary: "#506A45"
  primary-dark: "#3B5635"
  primary-light: "#677E56"
  accent: "#EAAE3E"
  ink: "#1B1D20"
  ivory: "#FDF9F1"
  white: "#FFFFFF"
typography:
  artwork-heading:
    fontFamily: Noto Sans Thai, sans-serif
    fontSize: 72px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  artwork-lead:
    fontFamily: Noto Sans Thai, sans-serif
    fontSize: 27px
    fontWeight: 400
    lineHeight: 1.52
    letterSpacing: "-0.008em"
  artwork-label:
    fontFamily: Noto Sans Thai, sans-serif
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.075em"
  heading:
    fontFamily: Noto Sans Thai, sans-serif
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: Noto Sans Thai, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
rounded:
  sm: 6px
  md: 12px
  lg: 20px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: 12px
  card:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  badge-secondary:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: 8px
  decorative-divider:
    backgroundColor: "{colors.primary-light}"
    height: 2px
    width: 100%
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 8px
---

## Overview

This file is the source of truth for all StarWork Chiang Mai content artwork, client-review UI, covers, infographics, posters, and generated visuals. The approved reference is the user-provided official logo stored at `public/brand/starwork-official-logo.png`.

The identity is professional, clean, warm, and locally grounded. Use an ivory base, restrained greens, black/ink typography, and amber only as an accent.

## Colors

- **Primary Green (`#506A45`)**: Main brand color for descriptor text, icons, dividers, and primary UI accents.
- **Dark Green (`#3B5635`)**: High-emphasis green for dark panels and strong graphical shapes.
- **Light Green (`#677E56`)**: Secondary segmented-star color and supporting visual accents.
- **Amber (`#EAAE3E`)**: Accent taken from the logo’s amber star segments. Use sparingly for highlights, markers, or status—not as the dominant background.
- **Ink (`#1B1D20`)**: Official wordmark color and primary text.
- **Ivory (`#FDF9F1`)**: Preferred neutral background sampled from the logo asset.
- **White (`#FFFFFF`)**: White star center and high-contrast text where required.

Colors were sampled from the supplied raster logo; minor anti-aliasing variations in the source image must not be treated as additional CI colors.

## Typography

- Use **Noto Sans Thai** for every Thai/Latin editorial headline, supporting line, benefit label, fact card, client-review surface, cover, infographic, and poster. Bundle the approved font files when rendering so the browser cannot fall back to Arial or a system font.
- For a `1600×900` artwork, use this hierarchy as the default starting point:
  - Main headline: `72px / 800 / 1.1 / -0.018em`
  - Supporting lead: `27px / 400 / 1.52 / -0.008em`; use weight `700` only for the key phrase
  - English/category label: `23px / 700 / 1 / 0.075em`
  - Benefit title: `18px / 700 / 1.35`
  - Benefit description: `14px / 400 / 1.45`
  - Key takeaway: `22px / 400 / 1.5`; emphasize only the decisive phrase at `700`
- Headline typography should be modern, loopless, substantial, and editorial. Use weight and scale—not extra boxes or decorative effects—to create hierarchy.
- Keep Thai line breaks semantic. Never split a phrase only to fill space, compress line-height until tone marks collide, or apply aggressive negative tracking.
- Use `font-synthesis: none` in browser-rendered artwork so unavailable weights are not fabricated.
- Do not use Arial, generic `system-ui`, Prompt, Kanit, or an unapproved substitute for final StarWork artwork.
- The official wordmark must always come from the supplied logo image. Do not recreate “starwork” with any typeface.
- The wordmark is lowercase: **starwork**. The descriptor is uppercase and letter-spaced: **CHIANG MAI**.

## Layout

- StarWork content artwork is a **photo-led editorial Decide/Learn surface**, not a flat infographic or generic card grid.
- For primary covers, default to `1600×900` (16:9). Use one real StarWork website photo as the hero image; service-comparison artwork may use up to three relevant real photos.
- Compose with a clear reading path: official logo → category label → two- or three-line headline → short supporting lead → restrained benefit strip → one decisive takeaway.
- Use an ivory text field fading into the photograph, Dark Green curved brand shapes, and Amber only for small markers or key emphasis. Preserve depth through photo crop, tonal fade, overlap, and scale—not through decorative gradients or glass effects.
- Limit each artwork to one main message and 3–4 supporting facts. Do not let metadata, icons, or cards compete with the headline.
- Give the official logo clear space on every side equal to at least the height of the inner white star point.
- Prefer an ivory or white background behind the logo.
- Keep artwork layouts editorial and structured; use generous whitespace and clear hierarchy.
- The full horizontal logo is the default lockup.

## Shapes

The official symbol is a five-point segmented star outline with a white five-point star in the center. Green and amber segments form the outer mark. The exact geometry must come from the supplied asset and must not be redrawn by an image model.

## Components

- Primary actions use Primary Green with white text.
- Amber is reserved for small highlights, numbered markers, or attention states.
- Cards use Ivory with Ink text and subtle green borders.
- Infographics may use green panels and amber indicators but must preserve strong text contrast.

## Do's and Don'ts

### Do

- Use `public/brand/starwork-official-logo.png` unchanged.
- Read this `DESIGN.md` before generating or revising any StarWork visual.
- Use bundled Noto Sans Thai weights 400, 600, 700, and 800; verify the rendered `font-family` before export.
- Source working-space photos from the official StarWork website/repository and match each photo to the article intent.
- Use only the colors defined in this file.
- Keep the logo’s proportions and orientation unchanged.
- Place the official logo into generated artwork as a supplied asset after generation, or design around a reserved logo area.
- Verify Thai text and all business facts before client review.

### Don't

- Do not ask an image model to invent, redraw, reinterpret, or approximate the StarWork logo.
- Do not replace the symbol with a generic star, “W” monogram, flower, temple, or other icon.
- Do not change the wordmark casing, spacing, colors, or lockup.
- Do not use blue-green, neon green, gold gradients, or unapproved palettes.
- Do not stretch, crop, rotate, outline, add shadows to, or place effects over the official logo.
- Do not use a fake logo inside cover art, infographic, poster, or review UI.
- Do not use Arial, browser-default Thai fonts, or allow font fallback in final artwork.
- Do not produce a flat card-grid infographic when a photo-led editorial key visual is required.
- Do not use stock imagery when a relevant official StarWork website photo is available.
