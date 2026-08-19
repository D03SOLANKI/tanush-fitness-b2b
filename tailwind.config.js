/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
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
        '3xl': '24px',
        '2xl': '20px',
        'xl': '14px',
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
