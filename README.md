# Autogrill MD — Roadside Grill Website

This repository contains the Autogrill MD static website built with React + TypeScript and Vite. The site is designed as a lightweight, mobile-friendly frontend with translations (Romanian, Russian, English), an embedded Google Map, and fast static hosting in mind.

**Contents**
- `src/` — React app source
- `src/pages/` — Pages (Index, Menu, Gallery, Location, Contact, NotFound)
- `src/components/` — UI components, including `Navigation.tsx`
- `src/lib/translations.ts` — Translation dictionary for `ro`, `ru`, `en`
- `src/context/LanguageProvider.tsx` — Lightweight i18n provider (`useLang()` + `t(key)`)
- `src/assets/` — Images and static assets

**Features**
- Fully static React + Vite site
- Language switching (Romanian default, Russian, English) with localStorage persistence
- Responsive navigation and mobile-friendly UI
- Gallery with hover gradient and translated captions
- Embedded Google Maps iframe (coordinates set for Stăuceni)

---

**Local development**

1. Install dependencies

PowerShell (recommended):
```powershell
pnpm install
# or if you use npm
npm install
```

2. Start dev server

```powershell
pnpm dev
# or
npm run dev
```

Open `http://localhost:5173` (or the port Vite prints) and verify the site.

3. Build production bundle

```powershell
pnpm build
# or
npm run build
```

The production files will be placed in the `dist/` folder (Vite default).

You can preview the production build locally with:

```powershell
pnpm preview
# or
npm run preview
```

---

**Translations / i18n**

- Translation keys live in `src/lib/translations.ts`.
- The app uses a custom `LanguageProvider` in `src/context/LanguageProvider.tsx`.
- Use the `useLang()` hook to access `t(key)` and `lang` in components.
- To add/adjust strings, edit `translations.ts` and add keys for `ro`, `ru`, and `en`.

---

**Gallery behavior**

- The gallery grid is in `src/pages/Gallery.tsx`.
- Each tile uses translation keys for alt text and labels so hovering shows translated text.
- The hover gradient is implemented with layered elements and Tailwind transitions; adjust the classes if you want the gradient stronger or taller.

---

**Assets and logo**

- The navigation uses `src/assets/logo.png` for the top-left logo.
- To swap the logo, replace `src/assets/logo.png` or update the import in `src/components/Navigation.tsx`.

---

**Contact & social links**

- Phone and social links are in `src/pages/Contact.tsx` and `src/pages/Gallery.tsx`.
- Update `tel:` links and social URLs there if they change.

---

**Deploying to production**

Recommended hosts for static Vite apps: Vercel, Netlify, Cloudflare Pages. Vercel is the simplest for React + Vite (automatic builds and HTTPS).

A. Deploy with Vercel (recommended)
1. Sign up at https://vercel.com and connect your Git provider.
2. Import repository — Vercel auto-detects Vite and sets build command to `pnpm build` or `npm run build`.
3. Set environment if needed (none required by default).
4. Deploy. After the first deploy you'll get a vercel.app domain.
5. Add a custom domain `autogrill.md` in Vercel dashboard → Domains. Follow the DNS instructions provided by Vercel.

B. Deploy with Netlify
1. Sign up at https://netlify.com and connect your Git provider.
2. Add new site from Git, choose repo, set build command (`pnpm build` or `npm run build`) and `dist` as publish directory.
3. Deploy and then add custom domain in Netlify → Domain settings and follow DNS steps.

C. Cloudflare Pages
1. Sign up at https://dash.cloudflare.com and use Pages to create a project from Git.
2. Connect repo and set build settings (framework: Vite, build command `pnpm build`, output `dist`).
3. Add custom domain and follow verification/DNS instructions.

**Important**: after adding the custom domain, your host will show the exact DNS records to add at the registrar (A/ALIAS/CNAME and sometimes a TXT for verification). Add those in your domain registrar's DNS panel.

---

**Registering `autogrill.md` (domain)**

Top-level notes:
- The `.md` TLD is for Moldova. The official registry is `nic.md` — check https://nic.md for registrar information.
- Many international registrars do not sell `.md` domains; you may need a registrar that supports `.md` (search "register .md domain" or lookup providers that list `.md`).
- During registration you'll configure nameservers or DNS records. You can either:
	- Point nameservers to your DNS provider (Cloudflare or your registrar) and manage DNS there, or
	- Keep registrar nameservers and edit DNS records there.

DNS setup (example for Vercel)
1. In Vercel dashboard add `autogrill.md` and follow the verification steps. Vercel will show the records required. Example records you might need to add at the registrar:
	 - `A` records for the apex domain (autogrill.md) to provider IPs OR an `ALIAS/ANAME` to the provider target
	 - `CNAME` for `www` pointing to the Vercel domain (usually `cname.vercel-dns.com`)
	 - A TXT record for verification if requested
2. After DNS propagates, Vercel will provision HTTPS automatically.

DNS propagation can take minutes to 48 hours depending on TTLs.

---

**Troubleshooting & tips**
- If your Tailwind classes don't appear after editing, restart the dev server so the JIT rebuilds the generated CSS.
- If the hover gradient or some Tailwind utility is not present, ensure your `tailwind.config.ts` content paths include `src/**/*`.
- For production preview locally, use `pnpm preview` after `pnpm build`.

---

**Contributing / Changes**
- Make a branch from `main`, implement changes, and open a PR.
- Keep translations in `src/lib/translations.ts` and avoid duplicating keys.

---

If you want, I can:
- Prepare a one-click Vercel deployment guide (with exact DNS records you need to copy into your registrar) once you pick a host and register the domain.
- Walk you step-by-step through registering `autogrill.md` (I can't register for you, but I can guide each form field and DNS step).

If you'd like edits to this README (more deployment examples, CI details, or a checklist), tell me what to add and I will update it.
