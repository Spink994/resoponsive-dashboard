/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#703EFE",
          2: "#1D1042",
          3: "#45269C",
        },
        gray: {
          0: "#B8B9BD",
          1: "#FCFBFC",
          2: "#F2F4F5",
          3: "#F4F6F8",
          4: "#EBEBEB",
          5: "#7D8088",
          6: "#858A93",
        },
        black: {
          1: "#000000",
        },
      },
      boxShadow: {
        light: "0px 0px 100px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};
