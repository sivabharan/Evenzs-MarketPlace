/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Elegant Professional Party Palette - High Contrast & Visibility
        primary: '#8B5CF6',        // Rich Purple (Main brand)
        secondary: '#1F2937',      // Dark Slate (Professional)
        accent: '#F59E0B',         // Warm Amber (Celebration)
        background: '#F9FAFB',     // Clean Light Grey
        
        // Extended elegant palette
        'purple-light': '#A78BFA', // Light Purple
        'purple-dark': '#7C3AED',  // Dark Purple
        'amber-light': '#FCD34D',  // Light Amber
        'amber-dark': '#D97706',   // Dark Amber
        'gold': '#F59E0B',         // Gold
        'gold-light': '#FCD34D',   // Light Gold
        'gold-dark': '#D97706',    // Dark Gold
        
        // Professional greys with high contrast
        'charcoal': '#374151',     // Medium Grey
        'charcoal-light': '#6B7280', // Light Grey
        'slate': '#1E293B',        // Dark Slate
        'pearl': '#F3F4F6',        // Very Light Grey
        'platinum': '#E5E7EB',     // Light Border Grey
        
        // Party accent colors
        'coral': '#EF4444',        // Coral Red
        'coral-dark': '#DC2626',   // Dark Coral
        'emerald': '#10B981',      // Emerald Green
        'sky': '#0EA5E9',          // Sky Blue
        
        // Standard colors for consistency
        'white': '#FFFFFF',
        'black': '#000000',
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
        },
        'yellow': {
          400: '#FACC15',
        },
        'red': {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' },
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