# Node 24 + npm 11 Setup

Your machine currently uses:

```txt
Node: v24.17.0
npm: 11.13.0
```

This project version is npm-ready and includes a `package-lock.json` generated for npm.

## Setup

```powershell
cd C:\Users\Shashwat\Desktop\shashwat-premium-portfolio-npm-node24
powershell -ExecutionPolicy Bypass -File .\scripts\setup-npm-windows.ps1
npm run dev
```

Open:

```txt
http://localhost:3000
```

## If you do not want to use the setup script

```powershell
npm config set registry https://registry.npmjs.org/
npm ci --no-audit --no-fund
npm run dev
```

## If npm still crashes

If you still see:

```txt
npm error Exit handler never called!
```

then npm itself is crashing before the project can install. The simplest fix is to downgrade npm only:

```powershell
npm install -g npm@10
npm -v
npm ci --no-audit --no-fund
npm run dev
```

Your Node 24 can stay installed.

## Daily commands

```powershell
npm run dev
npm run build
npm run type-check
npm run lint
```

## Main editable file

```txt
data/portfolio.ts
```
