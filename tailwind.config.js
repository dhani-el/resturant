/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'italliano':["italliano"],
      'bonheur':["bonheur"],
      'blacksword':["blacksword"],
      'inter':["inter"],
      'inter-itallic':["inter-itallic"],
      'noto':["noto"],
      'noto-itallic':["noto-itallic"],

    }
  },
  plugins: [],
}