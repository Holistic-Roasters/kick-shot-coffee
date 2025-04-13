# Vercel Deployment Instructions for Kick Shot Coffee Website

This document provides step-by-step instructions for deploying the Kick Shot Coffee e-commerce site to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com))
3. Git installed on your local machine

## Deployment Steps

### 1. Push the Code to GitHub

First, create a new repository on GitHub and push the code:

```bash
# Initialize Git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit for Kick Shot Coffee website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/kick-shot.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Log in to your Vercel account
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: npm run build (default)
   - Output Directory: .next (default)
   - Install Command: npm install (default)
5. Click "Deploy"

#### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

## Configuration Files

The package includes the following configuration files specifically for Vercel deployment:

1. `vercel.json` - Contains Vercel-specific configuration
2. `postcss.config.js` - Configures PostCSS for Tailwind CSS
3. `tailwind.config.js` - Configures Tailwind CSS with custom colors and fonts

## Troubleshooting Common Issues

### Build Errors

If you encounter build errors related to CSS or dependencies:

1. Ensure all dependencies are properly installed:
   ```bash
   npm install autoprefixer postcss tailwindcss
   ```

2. Check that the font files are in the correct location:
   - Font files should be in `/public/fonts/` directory
   - Verify that `SpaceGrotesk.ttf` and `Trench100.ttf` exist in that directory

3. If you see errors about missing modules, try clearing Vercel's cache:
   - Go to Project Settings → General → Build & Development Settings
   - Click "Clear Build Cache"

### Environment Variables

For Stripe integration, you'll need to add these environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add the following variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
   - `STRIPE_SECRET_KEY`: Your Stripe secret key

## Post-Deployment

After successful deployment:

1. Set up a custom domain (optional):
   - Go to Project Settings → Domains
   - Add your custom domain and follow the instructions

2. Enable automatic deployments:
   - Vercel automatically sets up continuous deployment from your GitHub repository
   - Any push to the main branch will trigger a new deployment

## Support

If you encounter any issues during deployment, please refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
