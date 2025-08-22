/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2B4BA1',
          DEFAULT: '#1E3A8A',
          dark: '#152B66',
        },
        secondary: {
          light: '#E5C55B',
          DEFAULT: '#D4AF37',
          dark: '#B39030',
        },
        accent: {
          light: '#FF7E67',
          DEFAULT: '#FF6347',
          dark: '#E54B2E',
        },
        success: {
          light: '#48C78E',
          DEFAULT: '#23A370',
          dark: '#1A7F55',
        },
        warning: {
          light: '#FFE08A',
          DEFAULT: '#FFDD57',
          dark: '#E6C41F',
        },
        error: {
          light: '#F14668',
          DEFAULT: '#DC143C',
          dark: '#B30F31',
        },
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          lighter: '#334155',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        countUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};