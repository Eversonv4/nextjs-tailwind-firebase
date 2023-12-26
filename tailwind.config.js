/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [{
    pattern: /from-(red|green|blue|gray)-(400|700)/,
  },
  {
    pattern: /to-(red|green|blue|gray)-(400|700)/,
  }],
  theme: {
    extend: {},
  },
  plugins: [],
}

