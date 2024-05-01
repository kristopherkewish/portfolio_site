/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        neon: {
          'from': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #1ab1f5, 0 0 30px #1ab1f5, 0 0 40px #1ab1f5, 0 0 55px #1ab1f5, 0 0 75px #1ab1f5' },
          'to': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff72e5, 0 0 30px #ff72e5, 0 0 40px #ff72e5, 0 0 55px #ff72e5, 0 0 75px #ff72e5' },
        }
      },
      animation: {
        neon: 'neon 1.5s infinite alternate',
      }
    },
  },
  plugins: [],
};
