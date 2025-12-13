# DELIVERABLE 1: CONTENT DECK

## SEO Metadata
**Global Title Suffix:** | Bubbalicious Hair & Co - Rothwell
**Home:** Best Hair Extensions & Colour Specialists Rothwell | Bubbalicious Hair & Co
**Meta Description (Home):** Transform your look at Bubbalicious Hair & Co, Rothwell's premier studio for lived-in blonde, balayage, and luxury hair extensions. Book your transformation today.
**Services:** Service Menu & Pricing | Blonde, Balayage & Extensions Brisbane
**Team:** Meet Our Expert Stylists | Colour & Extension Specialists Rothwell
**Gallery:** Real Transformations | Before & After Hair Gallery Brisbane
**Contact:** Book an Appointment | Hair Salon Rothwell QLD

## Schema.org (JSON-LD LocalBusiness)
```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Bubbalicious Hair & Co",
  "image": "https://picsum.photos/1200/600",
  "@id": "https://bubbalicioushairandco.com.au",
  "url": "https://bubbalicioushairandco.com.au",
  "telephone": "0400 000 000",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop X, Rothwell Central",
    "addressLocality": "Rothwell",
    "addressRegion": "QLD",
    "postalCode": "4022",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.21,
    "longitude": 153.04
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/bubbalicioushairandco",
    "https://www.facebook.com/bubbalicioushairandco"
  ]
}
```

## Image List & Alt Text
1.  **hero-banner.jpg**: "Woman with long, wavy blonde balayage hair sitting in a salon chair, natural lighting."
2.  **extensions-close.jpg**: "Close up detail of seamless invisible weft hair extensions application."
3.  **salon-interior.jpg**: "Modern warm salon interior in Rothwell with beige chairs and arched mirrors."
4.  **team-group.jpg**: "Bubbalicious Hair and Co styling team smiling in aprons."
5.  **transformation-grid.jpg**: "Grid of before and after hair colour transformations."

---

# DELIVERABLE 3: DESIGN SPECIFICATION

## Layout Grid
*   **Mobile:** 4 Columns, 16px Gutter, 20px Margin. Content max-width 100%.
*   **Desktop:** 12 Columns, 24px Gutter, Max-width 1280px centered.

## Typography Scale
*   **Font A (Headings):** Playfair Display (Serif)
    *   H1: 42px/48px (Mobile), 64px/72px (Desktop)
    *   H2: 32px/40px (Mobile), 48px/56px (Desktop)
    *   H3: 24px/32px
*   **Font B (Body):** Montserrat (Sans-serif)
    *   Body Large: 18px/28px
    *   Body Base: 16px/24px
    *   Caption: 14px/20px

## Color Palette (Tailwind Mapped)
*   **Primary Text:** `#2C2A2A` (Charcoal)
*   **Background:** `#F4EDE6` (Warm Sand)
*   **Accent/Buttons:** `#E8CFC6` (Soft Blush)
*   **Secondary Accent:** `#A3B9A8` (Sage)
*   **Dark CTA Text:** `#1F2933`

## UI Elements
*   **Buttons:**
    *   Height: 48px min.
    *   Radius: 999px (Pill) or 8px (Rounded).
    *   State (Hover): Darken background by 10%.
*   **Cards:**
    *   Radius: 12px.
    *   Shadow: Soft diffused shadow (`shadow-md`).
    *   Padding: 24px internal.
