import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#5ED05A',
          dark: '#17181C',
          gray: '#2B2E33',
        },
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [forms, typography],
};
