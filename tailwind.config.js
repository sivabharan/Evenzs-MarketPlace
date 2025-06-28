/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C4AB6',
        accent: '#FF6B6B',
        gold: '#F7C948',
        background: '#FDF9F6',
        'purple-light': '#8B6FBD',
        'purple-dark': '#5A3B9F',
        'coral-light': '#FF8E8E',
        'coral-dark': '#FF4747',
        'gold-light': '#F9D96E',
        'gold-dark': '#F5C52B',
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