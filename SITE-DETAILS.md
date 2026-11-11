# Ntombis Fashion: details needed before going live

Every `{{PLACEHOLDER}}` in `index.html`, `llms.txt` and `sitemap.xml` must be replaced.
`scripts/check-ready.sh` lists anything still missing.

**The name, address and phone must match the Google Business Profile and Takealot character for character.**

| Placeholder | What it is | Example |
|---|---|---|
| `{{STREET}}` `{{CITY}}` `{{PROVINCE}}` `{{POSTCODE}}` | Business address | 12 Main Rd, Soweto, Gauteng, 1804 |
| `{{PHONE_DISPLAY}}` | Phone as people read it | 071 234 5678 |
| `{{PHONE_INTL}}` | Same phone, international | +27712345678 |
| `{{WHATSAPP_DIGITS}}` | WhatsApp number, digits only | 27712345678 |
| `{{EMAIL}}` | Business email | hello@... |
| `{{HOURS_DISPLAY}}` | Hours as people read them | Mon–Fri 09:00–17:00, Sat 09:00–13:00 |
| `{{HOURS_SCHEMA}}` | Same hours, for Google | Mo-Fr 09:00-17:00, Sa 09:00-13:00 |
| `{{GOOGLE_MAPS_URL}}` | Share link of the Google Business Profile | https://maps.app.goo.gl/... |
| `{{INSTAGRAM_URL}}` `{{FACEBOOK_URL}}` `{{TIKTOK_URL}}` | Profile links (remove any that don't exist) | |
| `{{PRICE_*}}` | Rand price per product | R250 |
| `{{ABOUT_TEXT}}` | 2–4 sentences about Ntombi and how the brand started | |
| `{{DELIVERY_TEXT}}` | Delivery areas, cost, courier | |
| `{{BESPOKE_LEADTIME_TEXT}}` | How far ahead to book bespoke | e.g. 6–8 weeks before the event |
| `{{GA_ID}}` | Google Analytics Measurement ID | G-XXXXXXXXXX |
| `{{GSC_TOKEN}}` | The `content="..."` value of the Search Console verification tag | |
| `{{LASTMOD}}` | Date of going live | 2026-11-12 |

**Photos** go in `images/` (JPG, about 1200×1500, under 300 KB each):
`products/doek.jpg`, `products/wrap-skirt.jpg`, `products/kimono.jpg`, `products/tote-clutch.jpg`,
`products/bucket-hat.jpg`, `products/doek-earrings-set.jpg`, and `og-image.jpg` (1200×630, used when the link is shared).

**Custom domain (optional, recommended):** if you buy e.g. ntombisfashion.co.za, every
`https://ndumiso-y.github.io/Ntombis-Fashion/` URL gets replaced and a `CNAME` file is added.
