import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        byteblue: '#003BE2',
        bytelime: '#D4FB20',
        byteink: '#202126',
        bytemuted: '#747A86',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', "'Segoe UI'", 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'byte-grid':
          'linear-gradient(#ffffff26 1px, transparent 1px), linear-gradient(90deg, #ffffff26 1px, transparent 1px)',
        'growth-glow':
          'radial-gradient(ellipse at 15% 0%, #d4fb2040, transparent 50%), radial-gradient(ellipse at 100% 60%, #003be214, transparent 50%)',
        'creator-glow':
          'radial-gradient(ellipse at 0% 80%, #d4fb2040, transparent 50%), radial-gradient(ellipse at 100% 70%, #003be21f, transparent 50%)',
        'testimonial-glow':
          'radial-gradient(ellipse at 88% 13%, #d4fb2040, transparent 60%), radial-gradient(ellipse at 2% 91%, #003be21f, transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;
