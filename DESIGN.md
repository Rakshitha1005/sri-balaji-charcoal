# Design Brief: Sri Balaji Premium Charcoal

**Purpose:** E-commerce platform for Indian charcoal supplier (20+ years heritage, ₹ pricing, UPI/card payments)

**Tone:** Bold minimalism with industrial warmth. Heritage-rooted, commanding, not corporate-cold or playful.

## Palette (OKLCH)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Background | `0.99 0 0` (off-white) | `0.12 0 0` (pure black) | Page background |
| Foreground | `0.15 0 0` (near-black) | `0.96 0 0` (near-white) | Text, primary content |
| Card | `1.0 0 0` (white) | `0.18 0 0` (dark grey) | Product cards, containers |
| Primary/Accent | `0.62 0.21 45` (warm orange) | `0.62 0.21 45` (same) | CTAs, buttons, highlights |
| Muted | `0.95 0 0` (light grey) | `0.22 0 0` (dark grey) | Section backgrounds, dividers |
| Destructive | `0.55 0.19 25` (darker orange) | `0.55 0.19 25` | Errors, warnings |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Space Grotesk (bold, geometric, 700wt) | Headings, hero, product titles |
| Body | Satoshi (clean, readable, 400wt) | Content, descriptions, labels |
| Mono | JetBrains Mono | Prices, technical details |

## Structural Zones

| Zone | Treatment |
|------|-----------|
| Header | Dark card (`bg-card`) with `border-b`, logo + nav |
| Hero | Full-width dark background, orange CTA, white heading/subheading |
| Content Sections | Alternate dark background with light card sections; `shadow-card` on product cards |
| Footer | Dark background with orange accent links |
| WhatsApp Button | Fixed bottom-right, primary orange, `shadow-elevated` |

## Spacing & Rhythm

- **Grid:** 8px base unit
- **Container padding:** 24px (3 units)
- **Card gap:** 16px (2 units)
- **Section gap:** 32px (4 units)

## Component Patterns

- **Buttons:** Brutalist (no rounded corners, `rounded-none`), primary orange fill, bold Space Grotesk text, `button-primary` utility class
- **Cards:** `shadow-card` depth, `bg-card`, minimal padding (16px)
- **Form Inputs:** Dark border, `bg-input`, white text, 8px radius
- **Links:** Orange underline on hover, `transition-smooth`

## Motion

- **Transition:** `transition-smooth` (0.3s cubic-bezier) on all interactive elements
- **Hover states:** 90% opacity on primary buttons, overlay on cards
- **Loading:** Subtle pulse on interactive elements

## Signature Detail

Fire/heat visual theme: orange warmth against black void conveys premium charcoal quality. Brutalist button treatment (no rounding) emphasizes industrial product.
