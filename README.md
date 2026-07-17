# Metalix Commerce

A production-ready, mobile-first T-shirt storefront built with Next.js App
Router, React, strict TypeScript, Tailwind CSS, Zustand, React Hook Form, and
Zod.

## Local setup

Requirements: Node.js 20.9–24. Node.js 22 is recommended.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verify before pushing

```bash
npm run check
```

This runs strict TypeScript checking followed by a full production build.

## Vercel

The repository must contain `package.json` at its top level. Import the GitHub
repository into Vercel using the Next.js preset, Node.js 22.x, root directory
`./`, and no custom output directory.

See `DEPLOYMENT.md` for the complete replacement and deployment steps.

## Store configuration

Copy `.env.example` to `.env.local` for local development and add your numbers:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=8801712345678
NEXT_PUBLIC_BKASH_NUMBER=01712345678
NEXT_PUBLIC_NAGAD_NUMBER=01712345678
```

Do not include `+` in the WhatsApp number.

Products are managed in `data/products.ts`. Product assets are stored in
`public/images`.

## Backend scope

The included route handler validates an order and generates an order ID. It does
not permanently save orders. Connect a database and verified payment provider
before treating it as a full transactional commerce backend.
