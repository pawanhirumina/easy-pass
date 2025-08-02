# Easy Pass Landing Page

A modern, minimal, and responsive landing page for the Easy Pass browser extension, inspired by Vercel and Aceternity UI.

## Features
- Floating, pill-shaped navigation bar with icons
- Animated, multi-blob gradient hero background (CSS only)
- Responsive bento grid for features
- Minimal black & white color palette with CSS variables
- Modern iconography using [Phosphor Icons](https://phosphoricons.com/)
- All styles in a single CSS block (no external CSS frameworks)
- No build tools or frameworks required (pure HTML + CSS + minimal JS)

## Tech Stack & Libraries
- **HTML5**: Semantic markup
- **CSS3**: Custom properties (variables), Flexbox, Grid, media queries, keyframe animations
- **Phosphor Icons**: For all feature and button icons ([CDN link](https://unpkg.com/@phosphor-icons/web@2.0.3/src/css/phosphor.css))
- **JavaScript**: For smooth scrolling and intersection observer animations

## How to Recreate This Project

1. **HTML Structure**
   - Use a single `index.html` (or `test.html`) file.
   - Structure: floating nav, hero section with animated background, features (bento grid), download section, footer.

2. **Navigation Bar**
   - Use a fixed `<nav>` with a centered, pill-shaped `.nav-float` div.
   - Use Flexbox for horizontal layout.
   - Add logo, navigation links, and a call-to-action button.

3. **Animated Hero Background**
   - Add a `.hero-blobs-bg` div with several absolutely-positioned `.hero-blob` divs inside the hero section.
   - Animate blobs with CSS keyframes, blur, and blend modes.

4. **Hero Content**
   - Centered headline and subtitle.
   - Gradient text effect for main heading (optional).
   - Centered action buttons.

5. **Features Section (Bento Grid)**
   - Use CSS Grid for layout.
   - Each feature in a `.bento-item` with a Phosphor icon and description.
   - Responsive: stack items on small screens.

6. **Download Section**
   - Buttons for Edge Add-ons and GitHub Releases, each with a Phosphor icon.

7. **Footer**
   - Simple, multi-column layout with links and copyright.

8. **Styling**
   - Define all colors as CSS variables in `:root`.
   - Use Flexbox and Grid for layout.
   - Use media queries for responsiveness.
   - All styles in a single `<style>` block in the HTML.

9. **Icons**
   - Add Phosphor Icons via CDN in the `<head>`:
     ```html
     <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/css/phosphor.css">
     ```
   - Use `<i class="ph ph-icon-name"></i>` for icons.

10. **JavaScript**
    - Smooth scrolling for anchor links.
    - Intersection Observer for feature animations.
    - (Optional) Password animation in hero card.

## Customization
- **Colors**: Change CSS variables in `:root` for instant palette updates.
- **Icons**: Swap Phosphor icon classes for different visuals.
- **Blobs**: Adjust number, color, and animation of blobs in `.hero-blobs-bg`.
- **Content**: Edit HTML sections for your own product or extension.

## Credits
- [Phosphor Icons](https://phosphoricons.com/)
- [Aceternity UI](https://ui.aceternity.com/) for design inspiration
- [Vercel](https://vercel.com/) for minimal design inspiration

---

Feel free to fork, modify, and use for your own landing page or extension showcase!