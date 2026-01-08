/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Rexby Colors
        title: '#14142B',
        label: '#4E4B66',
        content: '#4E4B66',
        line: '#D6D8E7',
        offwhite: '#F5F7FA',
        ocean: '#1496BF',
        rexbygray: {
          200: '#E8EAEF',
          300: '#D6D8E7',
          400: '#C4C7D4',
          500: '#9CA3BD',
          700: '#6B6B7D',
          800: '#14142B',
        },
      },
      borderColor: {
        line: '#D6D8E7',
      },
    },
  },
  plugins: [],
}
