#!/bin/bash

# BilalEats Deployment Script
# This script helps you deploy the restaurant website

echo "🍽️  BilalEats Restaurant Website Deployment Helper"
echo "=================================================="

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found!"
    echo "📝 Please copy env.example to .env and configure your environment variables:"
    echo "   cp env.example .env"
    echo "   # Then edit .env with your actual values"
    echo ""
    read -p "Do you want to create .env from env.example now? (y/n): " create_env
    
    if [ "$create_env" = "y" ] || [ "$create_env" = "Y" ]; then
        cp env.example .env
        echo "✅ Created .env file from env.example"
        echo "📝 Please edit .env with your actual configuration values"
        echo ""
    fi
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔨 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Your application is ready for deployment!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Choose a hosting platform (Vercel, Railway, Render, etc.)"
    echo "2. Set up your environment variables on the platform"
    echo "3. Deploy your code"
    echo ""
    echo "📖 For detailed instructions, see README.md"
    echo ""
    echo "🌐 To test locally in production mode:"
    echo "   npm start"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
