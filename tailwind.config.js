/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blackout-black': '#000000',
        'neuro-yellow': '#FFD100',
        'asphalt-gray': '#333333',
        'toxic-cyan': '#00FFFF',
        'blood-red': '#FF0000',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
        'trench': ['Trench', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
