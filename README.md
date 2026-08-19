# Shashwat Premium Portfolio

A premium, editable developer portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui-style reusable components**.

This ZIP is prepared for your current setup:

```txt
Node: v24.17.0
npm: 11.13.0
```

## Quick start on Windows

Open PowerShell inside the project folder and run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-npm-windows.ps1
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Manual setup

```powershell
cd C:\Users\Shashwat\Desktop\shashwat-premium-portfolio-npm-node24
npm config set registry https://registry.npmjs.org/
npm ci --no-audit --no-fund
npm run dev
```

If `npm ci` fails, run:

```powershell
npm install --no-audit --no-fund
npm run dev
```

## Main editable file

All portfolio details are editable from:

```txt
data/portfolio.ts
```

Edit these values first:

```ts
name
fullName
title
location
email
phone
bio
skills
projects
experience
education
certifications
achievements
social links
```

## Add your resume

Replace or add:

```txt
public/resume.pdf
```

## Add your profile photo

Put your image in `public`, for example:

```txt
public/profile.jpg
```

Then update `data/portfolio.ts`:

```ts
profileImage: "/profile.jpg"
```

Use a square image for the best result.

## Available commands

```powershell
npm run dev
npm run build
npm run start
npm run type-check
npm run lint
npm run check
```

## Contact form

Recommended beginner option: **Web3Forms**.

Create `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, add the same environment variables in Vercel.

## Deployment recommendation

Use **Vercel**.

Recommended Vercel settings:

```txt
Framework: Next.js
Install Command: npm ci
Build Command: npm run build
Output: .next
```

## Important note about npm 11

This ZIP fixes the dependency conflict that was causing npm 11 to struggle with the earlier package. If your machine still shows:

```txt
npm error Exit handler never called!
```

then the crash is coming from the npm CLI itself, not the project code. In that case, the best fix is:

```powershell
npm install -g npm@10
```

Then run:

```powershell
npm ci --no-audit --no-fund
npm run dev
```
