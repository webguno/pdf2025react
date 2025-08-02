# Image to PDF Converter

A beautiful, responsive React application for converting multiple images into a single PDF document. Built with modern web technologies and optimized for deployment on Vercel.

## Features

- **Drag & Drop Upload**: Easy file upload with intuitive drag and drop interface
- **Multiple Format Support**: JPG, PNG, WebP, GIF, BMP, and TIFF images
- **Advanced Options**: Customize page size, orientation, margins, and image quality
- **Client-Side Processing**: All conversion happens in your browser for complete privacy
- **Dark/Light Theme**: Beautiful theme toggle with system preference detection
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional UI**: Modern design with shadcn/ui components and Tailwind CSS

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **PDF Generation**: pdf-lib for client-side PDF creation
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: Optimized for Vercel with proper configuration

## Deployment on Vercel

This project is pre-configured for Vercel deployment:

1. **Fork/Clone** this repository
2. **Connect to Vercel**: Import the project in your Vercel dashboard
3. **Deploy**: Vercel will automatically detect the configuration and deploy

### Vercel Configuration

The project includes:
- `vercel.json` with proper build and routing configuration
- Optimized build settings for Vite
- Client-side routing support
- API routes (if needed for future features)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Privacy & Security

- **No Server Processing**: Images never leave your device
- **Client-Side Only**: All PDF generation happens in your browser
- **No Data Collection**: No tracking or analytics
- **Open Source**: Transparent and auditable code

## Browser Support

Works in all modern browsers that support:
- ES2020+ features
- File API
- Canvas API
- ArrayBuffer

## License

MIT License - feel free to use this project for personal or commercial purposes.