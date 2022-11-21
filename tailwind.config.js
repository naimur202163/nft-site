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
      colors: {
        "light-gray": "#F9F9F9",
        "red-gray": "#ECE7E3",
        "dark-gray": "#787876",
      },
      backgroundImage: {
        faqPage: "url('https://i.ibb.co/bQmqFXc/page-header.jpg')",
      },
    },
  },
  plugins: [],
};
