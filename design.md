---
name: Sacred Editorial
colors:
  surface: '#fdf9f2'
  surface-dim: '#dddad3'
  surface-bright: '#fdf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#424844'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#737874'
  outline-variant: '#c2c8c3'
  surface-tint: '#506259'
  primary: '#0f2019'
  on-primary: '#ffffff'
  primary-container: '#24352d'
  on-primary-container: '#8b9e93'
  inverse-primary: '#b7cbc0'
  secondary: '#576156'
  on-secondary: '#ffffff'
  secondary-container: '#d8e3d5'
  on-secondary-container: '#5b655b'
  tertiary: '#281a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#412e06'
  on-tertiary-container: '#b29564'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e7db'
  primary-fixed-dim: '#b7cbc0'
  on-primary-fixed: '#0e1f18'
  on-primary-fixed-variant: '#394b42'
  secondary-fixed: '#dbe5d8'
  secondary-fixed-dim: '#bfc9bc'
  on-secondary-fixed: '#151e16'
  on-secondary-fixed-variant: '#40493f'
  tertiary-fixed: '#ffdea7'
  tertiary-fixed-dim: '#e2c28d'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#59431a'
  background: '#fdf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e6e2db'
  surface-tan: '#E9E1D4'
  pure-white: '#FFFFFF'
typography:
  display-hero:
    fontFamily: Cormorant Garamond
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110%
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Cormorant Garamond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 110%
  headline-lg:
    fontFamily: Cormorant Garamond
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 120%
  headline-lg-mobile:
    fontFamily: Cormorant Garamond
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 120%
  headline-md:
    fontFamily: Cormorant Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 130%
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 170%
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.1em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-gap-desktop: 160px
  section-gap-mobile: 100px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
  gutter: 24px
  container-max: 1200px
---

## Brand & Style
The design system embodies a **Luxury Editorial** aesthetic, reimagining the digital wedding invitation as a high-end fashion or lifestyle magazine. The personality is intimate, sophisticated, and deeply personal, focusing on the couple's narrative through photography rather than generic ornamentation.

The style is **Minimalist with Tactile touches**, utilizing generous whitespace and asymmetric layouts to create a sense of breathing room and premium quality. Christian symbolism is integrated with extreme subtlety—using fine-line crosses and botanical illustrations—ensuring the spiritual essence feels like a natural extension of the design rather than an add-on. The emotional goal is to evoke a sense of timeless romance and quiet reverence.

## Colors
This design system uses a palette rooted in nature and tradition. The background is a warm, paper-like ivory that provides a softer, more organic feel than pure white. The primary text color is a deep, near-black forest green, offering high contrast without the harshness of true black.

Muted olive is reserved for secondary information and supporting text, while muted gold serves as a delicate accent for lines, icons, and specific highlights. Avoid any saturated colors or heavy gradients; the depth should come from the photography and the interplay of these earthy, desaturated tones.

## Typography
The typographic hierarchy relies on a dramatic contrast between the classical elegance of **Cormorant Garamond** and the functional modernity of **Plus Jakarta Sans**. 

- **Display Serif:** Used for names, major headings, and the Bible verse. It should be typeset with tight leading and occasional negative letter-spacing for a modern editorial feel.
- **Body Sans:** Used for all logistical details, parent names, and form elements. It uses wider line-heights to ensure maximum readability against the warm background.
- **Labels:** Small-caps are used sparingly for labels like "THE WEDDING OF" or "KEPADA YTH" to create a structured, professional hierarchy.

## Layout & Spacing
The layout follows an **Editorial Fluid Grid** philosophy. While content is constrained to a 1200px max-width on desktop, elements should frequently break the vertical rhythm to create asymmetrical compositions typical of high-end magazines.

- **Desktop:** Use 12 columns with 48px margins. Place text and images off-center to create visual interest.
- **Mobile:** Single-column layout with 20px side margins. 
- **Rhythm:** Utilize large vertical gaps (up to 160px) between sections to force the user to focus on one piece of content at a time. Photography should often take up 50% to 100% of the viewport height.

## Elevation & Depth
This design system avoids traditional drop shadows and neomorphic effects. Instead, depth is communicated through **Tonal Layering** and **Subtle Overlays**:

- **Tonal Layers:** Using the "surface-tan" color (`#E9E1D4`) for cards or background sections to create a slight lift from the "neutral-ivory" base.
- **Photography Overlays:** The cover uses a linear gradient overlay (Ivory at 15% to 70% opacity) to ensure typography is legible over images without losing the texture of the photo.
- **Borders:** Use ultra-thin (1px) borders in "muted-gold" or "muted-olive" with low opacity (30-50%) for elements like bank cards and form inputs, maintaining a flat but structured feel.

## Shapes
The shape language is primarily **Soft (0.25rem)** to maintain a structured, editorial appearance. 

- **Images:** Should use a very subtle 4px corner radius to soften the edges of the photography without making them look like "app cards."
- **Buttons:** As an exception, buttons use a **Pill-shape (999px)** to provide a clear interactive affordance that feels approachable and modern.
- **Timeline Markers:** Small, 8px solid circles to maintain the minimal botanical aesthetic.

## Components
- **Buttons:** Primary buttons are solid "forest-green" with "ivory" text, pill-shaped. Secondary buttons (e.g., "See Location") are "ivory" with a 1px "gold" border.
- **Cards:** Used only for "Wedding Gift" and "RSVP" sections. They should have no shadow, a "surface-tan" background, and a 1px "gold" or "olive" border. 
- **Timeline:** A vertical 1px "gold" line with minimal circular markers. Times should be in Serif, while descriptions are in Sans.
- **Input Fields:** Minimalist design with only a bottom border or a very light "surface-tan" fill. Labels should be small-caps Sans.
- **Botanical Ornaments:** Use thin-line botanical illustrations as background elements or section dividers, ensuring they never overlap text.
- **The Cross:** A tiny, minimal 12px-16px cross can be used as a divider between the Bible verse and the couple's section or near the "Pemberkatan" heading.