/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',        // Professional Slate Gray
        accent: '#0F172A',         // Deep Charcoal
        gold: '#D97706',           // Sophisticated Amber
        secondary: '#475569',      // Medium Slate
        background: '#FEFEFE',     // Pure White
        'primary-light': '#334155',
        'primary-dark': '#0F172A',
        'accent-light': '#1E293B',
        'accent-dark': '#020617',
        'gold-light': '#F59E0B',
        'gold-dark': '#B45309',
        'secondary-light': '#64748B',
        'secondary-dark': '#334155',
        'elegant-gray': '#F8FAFC',
        'professional-blue': '#1E40AF',
        'celebration-accent': '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'elegant-float': 'elegantFloat 8s ease-in-out infinite',
        'party-pulse': 'partyPulse 3s ease-in-out infinite',
        'celebration': 'celebration 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(30, 41, 59, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(217, 119, 6, 0.4)' },
        },
        elegantFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1deg)' },
        },
        partyPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        celebration: {
          '0%, 100%': { 
            background: 'linear-gradient(135deg, #1E293B, #D97706)',
            transform: 'scale(1)'
          },
          '25%': { 
            background: 'linear-gradient(135deg, #D97706, #475569)',
            transform: 'scale(1.02)'
          },
          '50%': { 
            background: 'linear-gradient(135deg, #475569, #1E293B)',
            transform: 'scale(1.05)'
          },
          '75%': { 
            background: 'linear-gradient(135deg, #1E293B, #D97706)',
            transform: 'scale(1.02)'
          },
        },
      },
      backgroundImage: {
        'elegant-gradient': 'linear-gradient(135deg, #1E293B 0%, #475569 25%, #D97706 50%, #334155 75%, #1E293B 100%)',
        'party-gradient': 'linear-gradient(45deg, #D97706, #1E293B, #475569)',
        'celebration-gradient': 'linear-gradient(135deg, #1E293B, #D97706, #475569)',
        'professional-gradient': 'linear-gradient(135deg, #F8FAFC, #FEFEFE)',
      },
      backdropBlur: {
        'elegant': '20px',
      },
    },
  },
  plugins: [],
};
