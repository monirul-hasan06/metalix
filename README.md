# Metalix Commerce

A production-style, mobile-first T-shirt e-commerce storefront built with a modern professional frontend stack.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Zustand persistent cart state
- React Hook Form + Zod 4 validation
- Next.js Route Handler for order validation
- Next Image, Metadata, sitemap, robots and local fonts optimization

## Included pages

- Home
- Shop with search, category filters and sorting
- Dynamic product details
- Cart
- Validated checkout with COD, bKash and Nagad
- About
- Contact
- 404 page

## Run in VS Code

1. Install Node.js 20.9 or newer.
2. Open this folder in VS Code.
3. Copy `.env.example` to `.env.local` and update the numbers.
4. Run:

```bash
npm install
npm run dev
```

5. Open `http://localhost:3000`.

## Production test

```bash
npm run typecheck
npm run build
npm start
```

## Important configuration

Update `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=8801712345678
NEXT_PUBLIC_BKASH_NUMBER=01712345678
NEXT_PUBLIC_NAGAD_NUMBER=01712345678
```

Do not include `+` in the WhatsApp number.

## Product management

Edit `data/products.ts`. Replace product SVGs inside `public/images` with your JPG, PNG, WebP, or AVIF images. Recommended product ratio: 4:5, at least 1200 × 1500 px.

## Current backend scope

The Route Handler validates orders and generates order IDs, while the final confirmation is sent through WhatsApp. It does not persist orders to a database. For a live store, connect PostgreSQL/Supabase and a verified payment gateway such as SSLCommerz.
