/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Evenzs Brand Colors - Coral Pink & Mango Orange
        evenzs: {
          primary: '#FF4F6A',         // Coral Pink
          secondary: '#FFA533',       // Mango Orange
          accent: '#1E2A38',          // Midnight Blue
          neutral: '#F4F5F7',         // Mist Gray
          white: '#FFFFFF',           // Base White
          success: '#3CC179',         // Fresh Green
          error: '#F44336',           // Alert Red
          info: '#4AB0FF',            // Sky Blue
          tag: '#B28DFF',             // Lilac Purple
        },
        
        // Primary brand colors (mapped to evenzs for consistency)
        primary: '#FF4F6A',           // Coral Pink
        secondary: '#1E2A38',         // Midnight Blue
        accent: '#FFA533',            // Mango Orange
        background: '#FFFFFF',        // Clean White Background
        
        // Extended coral palette
        'coral': '#FF4F6A',           // Main Coral
        'coral-light': '#FF7A8A',     // Light Coral
        'coral-dark': '#E63946',      // Dark Coral
        'coral-soft': '#FFB3C1',      // Soft Coral
        
        // Extended mango palette
        'mango': '#FFA533',           // Main Mango
        'mango-light': '#FFB85C',     // Light Mango
        'mango-dark': '#E6941A',      // Dark Mango
        'mango-soft': '#FFCC80',      // Soft Mango
        
        // Midnight blue variations
        'midnight': '#1E2A38',        // Main Midnight
        'midnight-light': '#2D3E50',  // Light Midnight
        'midnight-dark': '#0F1419',   // Dark Midnight
        'midnight-soft': '#4A5568',   // Soft Midnight
        
        // Neutral grays
        'neutral': '#F4F5F7',         // Mist Gray
        'neutral-light': '#F8F9FA',   // Light Mist
        'neutral-dark': '#E2E8F0',    // Dark Mist
        
        // Supporting colors
        'success': '#3CC179',         // Fresh Green
        'error': '#F44336',           // Alert Red
        'info': '#4AB0FF',            // Sky Blue
        'tag': '#B28DFF',             // Lilac Purple
        
        // Standard colors for consistency
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': {
          50: '#F8F9FA',
          100: '#F4F5F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        'green': {
          100: '#F0FDF4',
          500: '#3CC179',
          600: '#16A34A',
          800: '#166534',
        },
        'blue': {
          100: '#EBF8FF',
          500: '#4AB0FF',
          600: '#2563EB',
        },
        'yellow': {
          400: '#FFA533',
        },
        'red': {
          50: '#FEF2F2',
          500: '#F44336',
          600: '#DC2626',
          700: '#B91C1C',
        },
        'purple': {
          500: '#B28DFF',
          600: '#7C3AED',
        },
        'emerald': {
          500: '#3CC179',
        },
        'orange': {
          500: '#FFA533',
        },
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(90deg, #FF4F6A 0%, #FFA533 100%)',
        'coral-gradient': 'linear-gradient(135deg, #FF4F6A 0%, #FF7A8A 100%)',
        'mango-gradient': 'linear-gradient(135deg, #FFA533 0%, #FFB85C 100%)',
        'midnight-gradient': 'linear-gradient(135deg, #1E2A38 0%, #2D3E50 100%)',
      },
      boxShadow: {
        card: '0 4px 12px rgba(30, 42, 56, 0.1)',
        hover: '0 6px 20px rgba(255, 79, 106, 0.2)',
        'coral-glow': '0 0 20px rgba(255, 79, 106, 0.3)',
        'mango-glow': '0 0 20px rgba(255, 165, 51, 0.3)',
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
        'coral-glow': 'coral-glow 3s ease-in-out infinite',
        'mango-glow': 'mango-glow 3s ease-in-out infinite',
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
        'coral-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 79, 106, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 79, 106, 0.5)' },
        },
        'mango-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 165, 51, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 165, 51, 0.5)' },
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