/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        obsidian: {
          DEFAULT: '#0B0F19',
          950: '#06080D',
          900: '#0B0F19',
          800: '#131927',
          700: '#1E293B',
        },
        brass: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
        },
        slate: {
          25: '#FCFCFD',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020817',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Archivo', 'sans-serif'],
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
