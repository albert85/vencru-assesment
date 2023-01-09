/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'layout': '#F9FAFB',
        '085': '#667085',
        'BFB': '#D6BBFB',
        '5FF': '#F9F5FF',
        'CF0': '#EAECF0',
      },
      boxShadow: {
        'btn': '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'table': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      },
      colors: {
        '828': '#101828',
        '085': '#667085',
        '1c6': '#6941C6',
        '054': '#344054',
        '89E': '#53389E',
        '6D9': '#7F56D9',
        '7ED': '#9E77ED',
        'BFB': '#D6BBFB',
        'CF0': '#EAECF0',
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
