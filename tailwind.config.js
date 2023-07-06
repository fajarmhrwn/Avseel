/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        jakarta:['var(--font-jakarta-sans)'],
      },
      height: {
        '128': '780px',
        '100':'600px',
      },
      width:{
        '128': '700px',
        '100':'400px',
      },
      minHeight: {
        '96': '500px',
        '128': '780px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
