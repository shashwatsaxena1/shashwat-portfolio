Write-Host "Preparing npm setup for Node 24 + npm 11..." -ForegroundColor Cyan

Write-Host "Checking versions..." -ForegroundColor Cyan
node -v
npm -v

Write-Host "Setting npm registry..." -ForegroundColor Cyan
npm config set registry https://registry.npmjs.org/

Write-Host "Cleaning old install/build folders..." -ForegroundColor Cyan
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Force pnpm-lock.yaml -ErrorAction SilentlyContinue
Remove-Item -Force yarn.lock -ErrorAction SilentlyContinue
Remove-Item -Force tsconfig.tsbuildinfo -ErrorAction SilentlyContinue

Write-Host "Verifying npm cache..." -ForegroundColor Cyan
npm cache verify

Write-Host "Installing dependencies with npm..." -ForegroundColor Cyan
npm ci --no-audit --no-fund

if ($LASTEXITCODE -ne 0) {
  Write-Host "npm ci failed. Trying npm install fallback..." -ForegroundColor Yellow
  npm install --no-audit --no-fund
}

if ($LASTEXITCODE -eq 0) {
  Write-Host "Done. Start the site with: npm run dev" -ForegroundColor Green
} else {
  Write-Host "npm install failed. Your npm CLI is crashing before project setup can finish." -ForegroundColor Red
  Write-Host "Try: npm install -g npm@10  OR use Node 22 LTS." -ForegroundColor Yellow
}
