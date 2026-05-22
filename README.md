# Ahaar — Charity-Forward Restaurant Website

Ahaar is a modern restaurant website concept built around a simple promise: every meal should nourish both guests and the wider community.
The current project presents a premium, trust-first landing experience for a Dhaka-based restaurant brand that donates **1000 BDT every week**, shares **10% of prepared meals** with orphan houses, and publishes **monthly impact updates** to stay transparent with customers.

## Project Overview

This repository is designed as a strong foundation for a hospitality brand that combines food, storytelling, and measurable community impact.
The current implementation focuses on a polished single-page public website that introduces the brand, highlights food offerings, builds trust through social proof and impact metrics, and drives visitors toward ordering or contacting the restaurant.

## Core Brand Positioning

Ahaar is positioned as:

- A modern, premium-casual restaurant brand.
- A socially responsible food business with transparent giving.
- A warm, community-centered dining experience.
- A brand that connects hospitality with dignity, consistency, and local impact.

## Current Features

The existing website includes the following major sections and UI features:

### 1. Impact Microbar
- Highlights the weekly donation promise and meal-sharing commitment.
- Establishes trust immediately at the top of the page.
- Reinforces the “Every meal, a mission” identity.

### 2. Sticky Navigation
- Responsive header with desktop and mobile navigation.
- Brand logo lockup and quick access to core sections.
- Strong call-to-action for ordering and supporting the cause.

### 3. Hero Section
- Mission-first messaging with a premium restaurant presentation.
- Emotional headline and supporting copy.
- Primary and secondary CTA buttons.
- Trust signals such as weekly giving, dignity-first sharing, and local partnerships.

### 4. Impact Metrics Section
- Displays trackable figures in a visual card layout.
- Includes weekly donation amount, shared meal percentage, monthly update rhythm, and partner home count.
- Helps users quickly understand the social impact model.

### 5. Impact Story and Transparency Section
- Explains why Ahaar exists and how the giving model works.
- Communicates responsibility, hygiene, and respectful distribution.
- Includes recent monthly updates to strengthen credibility.

### 6. Menu Highlights
- Showcases featured dishes using image-based cards.
- Supports the restaurant side of the brand while keeping the impact story visible.
- Helps bridge product appeal and mission appeal.

### 7. Contact and Order Section
- Provides WhatsApp/call details, address, and opening hours.
- Includes a contact/order/reservation form.
- Supports inquiry submission with basic client-side validation and success feedback.

### 8. Footer
- Repeats key links, contact details, social channels, and impact summary.
- Extends the trust-building tone through the final scroll area.

## Brand Facts Reflected in the Site

The current site communicates these core public-facing impact commitments:

- **1000 BDT is donated every week** to support families in need.
- **10% of prepared meals are shared** with orphan houses.
- **Monthly impact updates are published** for transparency.
- The restaurant serves from **42 Gulshan Avenue, Dhaka 1212**.
- Operating hours are **Sat–Thu: 11 AM – 11 PM** and **Fri: 1 PM – 11 PM**.

## Design Direction

The visual direction is centered around a premium, warm, and trustworthy restaurant identity.
The current design language uses:

- Warm cream backgrounds.
- Deep forest green as the primary brand anchor.
- Gold accents for emphasis and calls to action.
- Editorial-style heading typography.
- Clean sans-serif body text.
- Rounded cards, soft shadows, and smooth hover transitions.

This combination helps the project feel more human and brand-led than a generic restaurant template.

## Tech Stack

The current implementation uses a simple static stack that is easy to customize and deploy:

- **HTML5** for page structure.
- **Tailwind CSS (CDN)** for utility-based styling.
- **Custom CSS** for brand-specific polish and animation.
- **Vanilla JavaScript** for interactions.
- **Google Fonts** for typography.
- **Font Awesome** for icons.

## Current File Structure

At the moment, the project is centered around a single-page landing file:

```text
.
└── index.html
```

## Recommended Expanded Structure

As the project grows into a full restaurant website and admin system, the following structure is recommended:

```text
.
├── index.html
├── menu.html
├── dish-details.html
├── about.html
├── impact.html
├── reservations.html
├── gallery.html
├── contact.html
├── admin-login.html
├── admin-dashboard.html
└── assets/
    ├── images/
    ├── icons/
    └── logos/
```

## Functional Behavior in the Current Build

The existing page includes several user-facing interactive behaviors:

- Mobile menu toggle for smaller screens.
- Form validation for required fields.
- Loading and success state behavior on submission.
- Scroll-triggered animation effects.
- Hover interactions on navigation, cards, and buttons.

These interactions are lightweight and framework-free, which makes the project easy to maintain.

## Accessibility and UX Notes

The current implementation follows several practical front-end UX patterns:

- Clear visual hierarchy for major sections.
- Touch-friendly buttons and spacing.
- Readable form controls and labels.
- Sticky navigation for easier movement across the page.
- Clear CTA placement for conversions.
- Responsive behavior across desktop and mobile layouts.

Future improvements can include a dedicated dark mode system, skip links, stronger ARIA coverage, and expanded keyboard state testing.

## Getting Started

Because this is a static front-end project, setup is simple.

### Run Locally

1. Clone or download the project.
2. Keep the project files in the same folder.
3. Open `index.html` in a browser.

For a smoother local workflow, use a lightweight local server instead of opening the file directly.

### Example using VS Code Live Server

1. Open the folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

## Customization Guide

### Update Brand Content
You can easily customize:

- Restaurant name and tagline.
- Donation amount.
- Shared meal percentage.
- Address and phone number.
- Opening hours.
- Monthly impact reports.
- Menu items and prices.
- Hero message and CTA text.

### Update Colors and Typography
Brand styling is currently driven by Tailwind configuration and embedded CSS in `index.html`.
To customize the look:

- Adjust Tailwind color tokens for forest, gold, cream, and terracotta.
- Replace Google Fonts if a new heading/body pairing is preferred.
- Refine card radius, shadow, and spacing for a different brand personality.

### Update Images
The current page uses externally hosted imagery.
For production use, replace placeholder or stock assets with:

- Actual restaurant interiors.
- Signature dishes.
- Team or chef photography.
- Impact documentation images.

## Suggested Next Development Phases

To evolve this project into a complete digital product, the next recommended steps are:

### Public Website Expansion
- Full menu page.
- Dish details page.
- About page.
- Dedicated impact/community page.
- Reservation and order page.
- Gallery and reviews page.
- Standalone contact page.

### Admin Product Expansion
- Admin login page.
- Dashboard overview.
- Order management.
- Reservation management.
- Menu management.
- Donation and impact tracking.
- Inventory management.
- Content management.
- Reporting and analytics.

## Admin Dashboard Vision

A future admin dashboard for Ahaar should not behave like a generic restaurant panel.
It should combine operational restaurant workflows with community-impact management in one structured system.
Core admin areas should include:

- Orders and reservation operations.
- Menu and category updates.
- Donation logging.
- Meal-sharing tracking.
- Partner orphan house management.
- Monthly public update publishing.
- Inventory and supply alerts.
- Staff roles and permissions.

## Performance Notes

The current approach is intentionally lightweight and suitable for fast static delivery.
To improve performance further in production:

- Optimize and self-host images where appropriate.
- Compress image assets using modern formats like WebP.
- Minify custom CSS and JavaScript if split into separate files later.
- Reduce third-party dependency weight where possible.

## Deployment Options

This project can be deployed easily to any static hosting platform, including:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any traditional cPanel hosting that supports static files

## Best Use Cases

This project is a strong fit for:

- Socially responsible restaurant brands.
- Charity-forward food startups.
- Local hospitality businesses with community programs.
- Restaurant landing pages that need both emotional storytelling and direct conversion.

## Known Limitations

At its current stage, the project is primarily a front-end concept and landing page implementation.
It does not yet include:

- Backend authentication.
- Database connectivity.
- Real order processing.
- Payment integration.
- CMS integration.
- Real admin controls.
- Persistent analytics storage.

## Roadmap

### Phase 1
- Polish the public landing page.
- Split shared styles and scripts into reusable files.
- Improve accessibility coverage.

### Phase 2
- Build the remaining customer-facing pages.
- Introduce stronger component consistency.
- Add dark mode support.

### Phase 3
- Build admin login and dashboard interfaces.
- Add operational management modules.
- Create impact reporting workflows.

### Phase 4
- Connect to backend APIs.
- Add authentication and role-based access.
- Enable production data flows for orders, reservations, and reports.

## Summary

Ahaar is more than a restaurant landing page concept.
It is a brand system built around the idea that dining can directly support people in need.
The current implementation already establishes a strong emotional and visual foundation, and it can be expanded into a complete hospitality platform with public pages, operational tools, and impact-tracking workflows.