---
name: motion-systems
description: Creates high-quality motion systems with staggered animations, smooth entrances, count-up numbers, hover glows, animated gradients, floating elements, and parallax. Use when building motion design, adding animations, implementing entrance transitions, or when the user asks for Apple/Linear/Vercel/Stripe-style motion.
---

# High-Quality Motion Systems

Build motion that feels intentional, enhances UX, and never distracts. Aim for subtle but impressive. Reference: Apple, Linear, Vercel, Stripe.

## Core Principle

Every motion must: **intentional** (has a reason), **enhance UX** (guides or delights), **not distract** (support, don’t compete), **subtle but impressive** (refined, not flashy).

## Techniques

### Staggered animations

Reveal lists, cards, or grid items with small delays so the eye follows a clear order.

- Use Framer Motion `staggerChildren` + `delayChildren`, or map over items with `custom` and `transition: { delay: index * 0.05 }`.
- Stagger: 40–80ms between items. Don’t exceed ~100ms or the sequence feels slow.
- Typical: fade + slight y (e.g. 8–16px) or scale (0.98 → 1).

### Smooth entrance transitions

First paint of a section or page should feel like a single, cohesive reveal.

- Container: `initial={{ opacity: 0 }}` then `animate`/`whileInView` to `opacity: 1`. Optionally subtle y or scale.
- Use `once: true` for scroll-triggered entrances so they don’t replay on scroll back.
- Spring: `stiffness: 300–400`, `damping: 25–30`. Duration fallback: 300–400ms.

### Animated numbers (count up)

When showing stats, KPIs, or milestones, animate from 0 (or start value) to the target.

- Use a small hook or Framer Motion: drive a number with `useMotionValue` + `useTransform` + `useSpring`, or requestAnimationFrame with easing (e.g. easeOutQuart).
- Trigger on in-view (Intersection Observer or `whileInView`). Run once.
- Duration: ~1–1.5s. Easing: ease-out so the end feels stable.

### Hover glow effects

Subtle glow on interactive elements (buttons, cards, icons) to signal interactivity and add depth.

- CSS: `box-shadow` with a color tint (e.g. primary at 20–30% opacity), slightly larger spread on hover. Or `filter: drop-shadow()` for icons.
- Framer Motion: animate `boxShadow` or use a pseudo-element / wrapper with animated opacity and blur.
- Keep glow soft and on-brand; avoid harsh or oversized halos.

### Animated gradients

Gradients that shift slowly (backgrounds, hero sections, or accents) for depth without pulling focus.

- Animate gradient stop positions or hue (e.g. CSS `@property` + transition, or Framer Motion on a wrapper with `background`).
- Movement: very slow (e.g. 8–15s cycle). Low saturation preferred.
- Use for atmosphere, not for primary content areas that need stability.

### Floating elements

Gentle vertical or subtle scale motion for decorative elements (icons, shapes, badges).

- Framer Motion: `y` or `scale` with `repeat: Infinity`, `repeatType: "reverse"`, long duration (3–5s), ease in-out.
- Keep displacement small (e.g. 4–8px). Use for secondary visuals only.

### Parallax (when appropriate)

Slight difference in scroll speed between foreground and background to add depth.

- Apply only to hero or feature sections with clear foreground/background layers. Don’t parallax every section.
- Ratio: subtle (e.g. 0.5–0.7 for background). Avoid strong parallax that causes disorientation or layout shift.
- Implement via scroll-driven `transform: translateY` or a small parallax library; keep it performant (transform/opacity only).

## Implementation Notes

- **React**: Prefer Framer Motion. Use `motion` components, `useInView`, `useScroll`, `useTransform` for scroll-linked motion.
- **Performance**: Animate `transform` and `opacity` only when possible. Avoid animating `width`/`height`/`top`/`left` on large trees. Use `will-change` sparingly and only when needed.
- **Reduce motion**: Respect `prefers-reduced-motion: reduce` by disabling or shortening non-essential motion (entrances, floating, parallax). Keep count-up and critical feedback if needed, but simplify.

## Quick Reference

| Technique        | Use for                         | Keep it                          |
|-----------------|----------------------------------|----------------------------------|
| Stagger         | Lists, grids, card stacks        | 40–80ms delay, short total run   |
| Entrance        | Sections, modals, pages          | One-shot, spring, &lt;400ms      |
| Count up        | Stats, KPIs, milestones          | In-view once, ~1s, ease-out      |
| Hover glow      | Buttons, cards, icons            | Soft, on-brand, subtle            |
| Animated grad   | Backgrounds, hero                | Slow (8–15s), low saturation     |
| Floating        | Decorative elements              | Small movement, 3–5s             |
| Parallax        | Hero/feature depth               | Subtle ratio, no layout thrash   |
