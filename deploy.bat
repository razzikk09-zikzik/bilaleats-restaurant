@echo off
echo 🍽️  BilalEats Restaurant Website Deployment Helper
echo ==================================================

REM Check if .env file exists
if not exist ".env" (
    echo ⚠️  No .env file found!
    echo 📝 Please copy env.example to .env and configure your environment variables:
    echo    copy env.example .env
    echo    # Then edit .env with your actual values
    echo.
    set /p create_env="Do you want to create .env from env.example now? (y/n): "
    
    if /i "%create_env%"=="y" (
        copy env.example .env
        echo ✅ Created .env file from env.example
        echo 📝 Please edit .env with your actual configuration values
        echo.
    )
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

echo 🔨 Building the application...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🚀 Your application is ready for deployment!
    echo.
    echo 📋 Next steps:
    echo 1. Choose a hosting platform (Vercel, Railway, Render, etc.)
    echo 2. Set up your environment variables on the platform
    echo 3. Deploy your code
    echo.
    echo 📖 For detailed instructions, see README.md
    echo.
    echo 🌐 To test locally in production mode:
    echo    npm start
) else (
    echo ❌ Build failed! Please check the errors above.
    exit /b 1
)

pause
