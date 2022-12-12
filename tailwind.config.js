/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
    },
    screens: {
      'sm': '420px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'prim': ['Poppins', 'system-ui'],
    },
    colors: {
      'bg': '#F6F7FB',
      'primary': '#5751EB',
      'gray-txt': '#ABAFBB',
      'gray': '#EBECF0',
      'dark': '#050C4A',
      'white': '#FFFFFF',
      'accent': '#6E809C'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}