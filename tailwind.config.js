/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C2A2A',
        sand: '#F4EDE6',
        blush: '#E8CFC6',
        'blush-dark': '#D4B5AA',
        sage: '#A3B9A8',
        'dark-cta': '#1F2933',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      transitionDelay: {
        0: '0ms',
        100: '100ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
      },
    },
  },
  plugins: [],
}
