module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        header: "#0b0c10",
        footer: "#0b0c10",
        color: "#ffffff",
        background: "#1f2833",
        primary: "#66fcf1",
        secondary: "#45a29e",
        base_text: "#ffffff",
        linkcord: "#66fdf1"

      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}

