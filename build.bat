@echo off
echo Starting build process...

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
)

REM Build frontend with Vite
echo Building frontend...
npx vite build

REM Build backend with ESBuild
echo Building backend...
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo Build completed successfully!
