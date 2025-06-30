/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Gold & Dark Grey Elegant Party Color Palette
        primary: '#D4AF37',        // Rich Gold (Main brand)
        secondary: '#1A1A1A',      // Deep Charcoal (Professional)
        accent: '#F7D794',         // Champagne Gold (Celebration)
        background: '#FAFAF9',     // Warm Off-White
        
        // Extended gold palette
        'gold': '#D4AF37',         // Same as primary for consistency
        'gold-light': '#F4E4BC',   // Light Champagne
        'gold-dark': '#B8860B',    // Dark Goldenrod
        'gold-elegant': '#DAA520', // Goldenrod
        'champagne': '#F7E7CE',    // Soft Champagne
        
        // Extended dark grey palette
        'charcoal': '#2D2D2D',     // Medium Charcoal
        'charcoal-light': '#404040', // Light Charcoal
        'charcoal-dark': '#0D0D0D', // Almost Black
        'slate-warm': '#3A3A3A',   // Warm Slate
        
        // Elegant party accents
        'rose-gold': '#E8B4B8',    // Rose Gold
        'bronze': '#CD7F32',       // Bronze
        'copper': '#B87333',       // Copper
        'platinum': '#E5E4E2',     // Platinum
        
        // Neutral sophistication
        'pearl': '#F8F6F0',        // Warm Pearl
        'ivory': '#FFFFF0',        // Ivory
        'cream': '#F5F5DC',        // Cream
        'smoke': '#F5F5F5',        // Light Smoke
        
        // Purple variants (used in components)
        'purple-light': '#9333EA',
        'purple-dark': '#7C3AED',
        
        // Coral variants (used in components)
        'coral': '#FF6B6B',
        'coral-dark': '#DC2626',
        
        // Additional utility colors
        'gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        'green': {
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          800: '#166534',
        },
        'blue': {
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          800: '#1E40AF',
        },
        'red': {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        'yellow': {
          400: '#FACC15',
        },
        'pink': {
          500: '#EC4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // iPhone specific breakpoints
        'iphone-se': '375px',
        'iphone-12': '390px',
        'iphone-14-pro': '393px',
        'iphone-16-pro': '402px',
        'iphone-16-pro-max': '430px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        'screen-mobile': '100vh',
        'dvh': '100dvh',
      },
      maxHeight: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        'dvh': '100dvh',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'party-pulse': 'party-pulse 4s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'celebration': 'celebration 8s ease-in-out infinite',
        'elegant-float': 'elegant-float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'gold-glow': 'gold-glow 3s ease-in-out infinite',
        'mobile-safe': 'mobile-safe 0.3s ease-out',
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
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gold-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
        },
        'mobile-safe': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};