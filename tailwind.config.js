module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: "Oswald",
        opens: '"Open Sans"',
      },
      colors:{
        "light-gray":'#F9F9F9'
      }
    },
  },
  plugins: [],
};
