# Deployment fix report

## Important issue fixed

The previous lockfile contained dependency download URLs from a private internal
package registry. A local environment with access to that registry could install
the packages, while GitHub Actions or Vercel could fail during dependency
installation. The lockfile now uses `https://registry.npmjs.org/` only.

## Other deployment fixes

- Added a public npm registry configuration in `.npmrc`.
- Defined a supported Node.js range and recommended Node.js 22.
- Removed experimental Next.js configuration.
- Added automatic Vercel production URL detection for metadata, robots, and sitemap.
- Added a `/api/health` production diagnostic endpoint.
- Added a GitHub Actions build check.
- Made the ZIP repository-root-ready; `package.json` is at the archive root.
- Changed the order API to calculate product prices and totals on the server.
- Added a visible WhatsApp confirmation fallback when popup blocking occurs.

## Verification completed

- Clean dependency installation from the lockfile
- Strict TypeScript check
- Next.js production build
- All main pages returned HTTP 200
- Health API returned HTTP 200
- Valid order API test returned HTTP 201
- Invalid product API test returned HTTP 400
- Production dependency audit returned zero vulnerabilities
