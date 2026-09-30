# ByteSpace

A small course marketplace site: a landing page, plus login and signup. Search, filters, and the forms all run in the browser. Nothing is saved, and no account is actually created.

## Run it

Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

| Page    | Route     |
| ------- | --------- |
| Home    | `/`       |
| Sign in | `/login`  |
| Sign up | `/signup` |

If Turbopack misbehaves on your machine, start the dev server with `npm run dev:webpack` instead.

## What you can try

The home page is the catalog. The hero search and the category buttons filter the same six courses. Learning-path buttons jump back to that list. Categories with no matching course show an empty state you can reset.

The bag and the newsletter only confirm what you typed. Login and signup check that the email looks valid and the password is at least six characters. The social buttons say sign-in is not connected.

## Deploy on Vercel

Import the repo and leave the framework as Next.js. Vercel will use `npm run build`. There are no environment variables.

Poppins comes from `next/font`. The build needs network access the first time so Next.js can fetch the font. The deployed app then serves those files itself.

Before you push, `npm run build` is the check that matches what Vercel runs. `npm run lint` and `npm run typecheck` are optional.

## Layout

- `app` holds the routes and the small global stylesheet.
- `components` is the UI. Landing sections live in `components/landing`, and the auth screens share `components/AuthShell.tsx`.
- `data/landing.ts` is the course, category, and testimonial content.
- `public/assets` is the images those pages actually use.
- `tailwind.config.ts` is the brand colors and shared backgrounds.
