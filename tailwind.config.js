const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|image|input|link|ripple|spinner|form).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}