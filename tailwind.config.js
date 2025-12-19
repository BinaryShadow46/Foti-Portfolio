/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-start-rgb))',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
