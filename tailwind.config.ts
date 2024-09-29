import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "class-display": ["Clash Display", "sans-serif"],
      },
      backgroundImage: {
        "border-gradient": "linear-gradient(#F96418, transparent)",
        "angular-gradient":
          "conic-gradient(from 27.37deg at 25.5% 74.44%, rgba(45, 82, 204, 0.5) -83.2deg, rgba(114, 75, 221, 0.5) 64.38deg, #A03D8C 180deg, rgba(45, 82, 204, 0.5) 276.8deg, rgba(114, 75, 221, 0.5) 424.38deg)",
        "gray-gradient":
          "radial-gradient(94.31% 66.31% at -53.25% 10.23%, #FFFFFF 0%, rgba(255, 255, 255, 0.06) 100%) radial-gradient(109.27% 68.89% at -1.85% 134.87%, #667FFF 0%, rgba(134, 92, 255, 0) 100%) radial-gradient(45.91% 42.85% at 51.09% -22.85%, #000000 0%, rgba(255, 255, 255, 0) 100%)",
      },
      backgroundSize: {
        "115%": "115%",
      },
      borderColor: {
        "gradient-border": "linear-gradient(180deg, #F96418 0%, #F96418 100%)",
        "gray-gradient":
          "radial-gradient(94.31% 66.31% at -53.25% 10.23%, #FFFFFF 0%, rgba(255, 255, 255, 0.06) 100%) radial-gradient(109.27% 68.89% at -1.85% 134.87%, #667FFF 0%, rgba(134, 92, 255, 0) 100%) radial-gradient(45.91% 42.85% at 51.09% -22.85%, #000000 0%, rgba(255, 255, 255, 0) 100%)",
      },
      colors: {
        black: "#000000",
        primary: "#4BF7E2E5",
        secondary: "#030307",
        "ghost-white": "#F6F8FF",
        ceil: "#999EE0",
        blue: "#6044EA",
        "foreground-50": "rgba(153, 158, 224, 0.1)",
        "foreground-150": "rgba(153, 158, 224, 0.3)",
        "background-950": "#1e1e1e",
      },
      screens: {
        "3xl": "1700px",
      },
      width: {
        content: "1280px",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-150%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        bounce: "bounce 1.2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
