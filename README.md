# BilalEats Restaurant Website

A modern, fully responsive restaurant website for Mount Road Bilal - Kebabs & Biriyani built with React, TypeScript, and Express.js.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (for production)

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/bilaleats
   
   # Email Configuration (for contact form)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM=noreply@mountroadbilal.com
   
   # Restaurant contact email
   RESTAURANT_EMAIL=info@mountroadbilal.com
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   The website will be available at `http://localhost:5000`

### Production Build

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Frontend + API Routes)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - Go to your project settings
   - Add all environment variables from your `.env` file

### Option 2: Railway

1. **Connect GitHub Repository**
   - Go to [Railway.app](https://railway.app)
   - Connect your GitHub repository

2. **Add PostgreSQL Database**
   - Add PostgreSQL service
   - Copy the DATABASE_URL

3. **Set Environment Variables**
   - Add all required environment variables

4. **Deploy**
   - Railway will automatically deploy on push

### Option 3: Render

1. **Create Web Service**
   - Go to [Render.com](https://render.com)
   - Connect your GitHub repository
   - Choose "Web Service"

2. **Configure Build Settings**
   - Build Command: `npm run build`
   - Start Command: `npm start`

3. **Add PostgreSQL Database**
   - Create PostgreSQL database
   - Copy DATABASE_URL

4. **Set Environment Variables**
   - Add all required environment variables

### Option 4: DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean App Platform
   - Connect GitHub repository

2. **Configure App Spec**
   ```yaml
   name: bilaleats
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/bilaleats
       branch: main
     run_command: npm start
     build_command: npm run build
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     envs:
     - key: NODE_ENV
       value: production
     - key: DATABASE_URL
       value: ${db.DATABASE_URL}
   databases:
   - name: db
     engine: PG
     version: "13"
   ```

### Option 5: Traditional VPS (Ubuntu/CentOS)

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PostgreSQL
   sudo apt install postgresql postgresql-contrib -y
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone https://github.com/your-username/bilaleats.git
   cd bilaleats
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Set up environment variables
   cp .env.example .env
   # Edit .env with your values
   
   # Start with PM2
   pm2 start dist/index.js --name bilaleats
   pm2 startup
   pm2 save
   ```

3. **Set up Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 📧 Email Configuration

The contact form requires email configuration. Here are popular options:

### Gmail SMTP
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Use App Password, not regular password
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASSWORD=your-mailgun-smtp-password
```

## 🗄️ Database Setup

### Local PostgreSQL
```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Create database
sudo -u postgres createdb bilaleats

# Create user
sudo -u postgres createuser --interactive
```

### Cloud Database Options
- **Neon** (Free tier available)
- **Supabase** (Free tier available)
- **Railway PostgreSQL**
- **Render PostgreSQL**
- **DigitalOcean Managed Database**

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check
- `npm run db:push` - Push database schema

## 📁 Project Structure

```
BilalEats/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and data
│   │   └── hooks/         # Custom hooks
│   └── index.html
├── server/                # Express backend
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage
│   └── email.ts          # Email functionality
├── shared/               # Shared types and schemas
└── dist/                 # Built files (after npm run build)
```

## 🌟 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Built with Tailwind CSS and Radix UI
- **Contact Form** - Email notifications for inquiries
- **Menu Display** - Beautiful menu presentation
- **Branch Information** - Multiple location details
- **Fast Performance** - Optimized with Vite

## 🚀 Quick Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy!

Your website will be live at `https://your-project.vercel.app`

## 📞 Support

For deployment issues or questions, check the hosting provider's documentation or contact their support team.

---

**Note**: Make sure to replace placeholder values (like email addresses, database URLs) with your actual values before deploying.
