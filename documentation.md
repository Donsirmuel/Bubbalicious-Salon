# DELIVERABLE 1: CONTENT DECK

## REQUIRED ACTIONS: IMAGE SETUP
**You must create a folder structure `/public/images/` and add your image files with these exact names:**

**Hero & General:**
1. `hero-blonde.jpeg` (The main long blonde hair image)
2. `hero-extensions.jpeg` (Extensions detail shot)
3. `hero-salon.jpeg` (Salon interior)
4. `texture-bg.jpeg` (Subtle texture for backgrounds)

**Team:**
5. `team-brittany.jpeg` (Director)
6. `team-courtney.jpeg` (Senior Stylist)
7. `team-ash.jpeg` (Emerging Stylist)

**Gallery Categories:**
8. `gallery-blonde.jpeg`
9. `gallery-balayage.jpeg`
10. `gallery-extensions.jpeg`
11. `gallery-corrective.jpeg`
12. `gallery-faceframe.jpeg`
13. `gallery-volume.jpeg`
14. `gallery-caramel.jpeg`
15. `gallery-banding.jpeg`

**Instagram Feed (8 Images):**
16. `insta-1.jpeg` through `insta-8.jpeg`

## SEO Metadata
**Global Title Suffix:** | Bubbalicious Hair & Co - Rothwell
**Home:** Best Hair Extensions & Colour Specialists Rothwell | Bubbalicious Hair & Co
**Meta Description (Home):** Transform your look at Bubbalicious Hair & Co, Rothwell's premier studio for lived-in blonde, balayage, and luxury hair extensions. Book your transformation today.

## Schema.org (JSON-LD LocalBusiness)
```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Bubbalicious Hair & Co",
  "image": "https://bubbalicioushairandco.com.au/images/hero-blonde.jpeg",
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