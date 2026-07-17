# GitHub and Vercel deployment

This folder is the application root. `package.json`, `app`, `components`, and
`public` must be visible at the top level of the GitHub repository.

## Replace an existing GitHub repository

1. Delete the old project files from the repository working folder, except `.git`.
2. Copy every file and folder from this package into that same repository root.
3. Run:

```bash
npm ci
npm run check
git add .
git commit -m "Fix Vercel production deployment"
git push origin main
```

## Vercel settings

Use these values in Project Settings > Build and Deployment:

- Framework Preset: `Next.js`
- Root Directory: `./`
- Build Command: leave blank (or `npm run build`)
- Output Directory: leave blank
- Install Command: leave blank (Vercel uses the lockfile)
- Node.js Version: `22.x`

Remove any old custom Output Directory such as `dist`, `build`, `out`, or `.next`.

Environment variables are optional for building. Add these for real order details:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=8801712345678
NEXT_PUBLIC_BKASH_NUMBER=01712345678
NEXT_PUBLIC_NAGAD_NUMBER=01712345678
```

`NEXT_PUBLIC_SITE_URL` can remain unset on Vercel. The project automatically uses
the Vercel production domain. Set it only when using a custom domain.

## Verification URLs

After deployment, test:

- `/`
- `/shop`
- `/api/health`
- `/robots.txt`
- `/sitemap.xml`
