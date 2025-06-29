/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated to match evenzs.com branding
        primary: '#7C3AED', // Purple primary
        secondary: '#1E293B', // Dark slate
        accent: '#F59E0B', // Amber/Gold accent
        background: '#FAFAFA', // Light gray background
        'purple-light': '#A78BFA',
        'purple-dark': '#5B21B6',
        'amber-light': '#FCD34D',
        'amber-dark': '#D97706',
        'slate-light': '#475569',
        'slate-dark': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'party-pulse': 'party-pulse 4s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'celebration': 'celebration 8s ease-in-out infinite',
        'elegant-float': 'elegant-float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'party-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.08' },
          '50%': { transform: 'scale(1.05)', opacity: '0.12' },
        },
        sparkle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)', opacity: '0.4' },
          '25%': { transform: 'rotate(90deg) scale(1.1)', opacity: '0.6' },
          '50%': { transform: 'rotate(180deg) scale(1)', opacity: '0.4' },
          '75%': { transform: 'rotate(270deg) scale(1.1)', opacity: '0.6' },
        },
        celebration: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
          '25%': { transform: 'translateY(-5px) rotate(5deg)', opacity: '0.5' },
          '50%': { transform: 'translateY(-2px) rotate(-3deg)', opacity: '0.4' },
          '75%': { transform: 'translateY(-7px) rotate(2deg)', opacity: '0.6' },
        },
        'elegant-float': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)', opacity: '0.5' },
          '33%': { transform: 'translateX(2px) translateY(-3px)', opacity: '0.7' },
          '66%': { transform: 'translateX(-1px) translateY(-1px)', opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};