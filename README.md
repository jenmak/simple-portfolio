# Simple Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features beautiful typography with Merriweather and Lato fonts.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Merriweather and Lato fonts

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Styling
The project uses Tailwind CSS with custom font configurations:

- **Merriweather** (serif) - Used for headings (`font-serif`)
- **Lato** (sans-serif) - Used for body text (`font-sans`)

Font configurations are in `tailwind.config.js` and `src/app/layout.tsx`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
└── components/
    ├── Hero.tsx           # Hero section
    ├── About.tsx          # About section
    ├── Projects.tsx       # Projects showcase
    └── Contact.tsx        # Contact form and info
```

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Use the Next.js build command
- **Other platforms**: Build the project with `npm run build` and deploy the output

## License

This project is open source and available under the [MIT License](LICENSE).
