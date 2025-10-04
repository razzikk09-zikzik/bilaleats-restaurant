#!/bin/bash

# Build script for Vercel deployment
echo "Starting build process..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build frontend with Vite
echo "Building frontend..."
npx vite build

# Build backend with ESBuild
echo "Building backend..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Build completed successfully!"
