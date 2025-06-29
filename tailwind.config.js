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
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};