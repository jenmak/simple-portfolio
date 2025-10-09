/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      colors: {
        'background': 'var(--color-background)',
        'foreground': 'var(--color-foreground)',
        'accent': 'var(--color-accent)',
        'accent-light': '#FFF4E6', // Light beige for animation
      },
    },
  },
  plugins: [],
}
