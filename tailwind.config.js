/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#090C10',
          950: '#05070A',
          900: '#090C10',
          850: '#0D1117',
          800: '#121722',
          700: '#1B2232',
          600: '#263045',
        },
        gold: {
          DEFAULT: '#C5A880',
          50: '#FBF9F5',
          100: '#F4EFE6',
          200: '#E8DCCB',
          300: '#DBC7AC',
          400: '#CFA88D',
          500: '#C5A880',
          600: '#B08F63',
          700: '#947348',
          800: '#755833',
        },
        terracotta: {
          DEFAULT: '#C2552F',
          400: '#D26539',
          500: '#C2552F',
          600: '#A8411D',
        },
        forest: {
          DEFAULT: '#3A563F',
          800: '#283B2C',
          700: '#3A563F',
          600: '#4D7254',
        },
        cobalt: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        heading: ['Montserrat', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '3xl': '16px',
        '2xl': '12px',
        'xl': '10px',
        'lg': '8px',
        'md': '6px',
      },
      boxShadow: {
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.25)',
        'blue-sm': '0 4px 15px rgba(59, 130, 246, 0.2)',
        'stripe': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
        'apple': '0 10px 30px -5px rgba(15, 23, 42, 0.05)',
      }
    },
  },
  plugins: [],
}
