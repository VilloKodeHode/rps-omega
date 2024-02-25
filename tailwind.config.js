/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      }),
      fontFamily: { Roboto: ["Roboto", "sans-serif"] },
      colors: {
        "lightBlue": "#A8DEDC",
      },
      keyframes: {
        popUp: {
          "0%": { transform: "scale(0)", opacity: "0%" },
          "100%": { transform: "scale(1)", opacity: "100%" },
        },
        glow: {
          "0%": { opacity: "30%" },
          "100%": { opacity: "100%" },
        },
        slideIn: {
          "0%": { transform: "scale(0)", right: "0" },
          "100%": { transform: "scale(1)", right: "50%" },
        },
        fallDown: {
          "0%": { transform: "translateY(-300%) perspective(100px)" },
          "55%": { transform: "translateY(0%)" },
          "60%": { transform: "translateY(-10%) rotate(5deg)" },
          "70%": { transform: "translateY(0%)"},
          "80%": { transform: "translateY(-5%) rotate(-5deg)" },
          "90%": { transform: "translateY(0%) rotate(0deg)" },
          "100%": { transform: "translateY(0%) rotate(0deg)" },
        }
      },
      animation: {
        ProjectPopUp: "popUp ease 0.3s linear",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 1s ease-in-out infinite alternate",
        rulesSlideIn: "slideIn 1s ease-in-out linear",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
        fallDown: "fallDown 0.6s linear forwards",
      },
    },
  },
  plugins: [],
};
