/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'black': '#000000',
      'dark': '#464646',
      'natural-400': '#94A3B8',
      'natural-600': '#475569',
      'natural-800': '#1E293B',
      'blue': '#0D3DE5',
      'blue-50': '#E7ECFC',
      'blue-300': '#6E8BEF',
      'blue-400': '#3D64EA',
      'blue-600': '#0A31B7',
      'blue-800': '#05185C',
      'white': '#ffffff',
      'white-100': '#F6F8FF',
      'white-200': '#F5F7FD',
      'white-300': '#EBEBEB',
      'silver': '#E4EAFF',
      'sliver-dark': 'rgba(0, 0, 0, 0.06)',
    },
    extend: {
      boxShadow: {
        all: ' 0px 16px 35px rgba(0, 0, 0, 0.15)',
      }
    }
  },
  plugins: [],
}
