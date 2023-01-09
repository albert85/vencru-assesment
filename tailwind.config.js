/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'layout': '#F9FAFB',
        '085': '#667085',
      },
      colors: {
        '828': '#101828',
        '085': '#667085',
        '1c6': '#6941C6',
        '054': '#344054',
      },
      borderColor: {
        '5DD' : '#D0D5DD'
      }
    },
    accentColor: {
      '6D9': '#7F56D9'
    }
  },
  plugins: [],
}
