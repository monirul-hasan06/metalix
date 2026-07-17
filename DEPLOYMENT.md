# Deployment

## Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Add all values from `.env.example` in Project Settings > Environment Variables.
4. Deploy. Vercel automatically detects Next.js.
5. Set `NEXT_PUBLIC_SITE_URL` to the final production URL and redeploy.

## Before accepting real orders

The included API validates incoming order data and produces an order ID, but does not save data permanently. For a real business store, add:

- PostgreSQL or Supabase database
- Admin authentication and order dashboard
- Server-side stock validation
- Verified SSLCommerz/bKash payment integration
- Transactional email/SMS notifications
- Privacy policy and terms
