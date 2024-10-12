/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "discord-blue": "#5865f2",
        "discord-gray": "#313338",
        "discord-white": "#dbdee1",
        "discord-black": "#1e1f22",
      },
      fontFamily: {
        ggSansRegular: ["GG-Sans-Regular"],
        ggSansMedium: ["GG-Sans-Medium"],
        ggSansSemibold: ["GG-Sans-Semibold"],
        ggSansBold: ["GG-Sans-Bold"],
      },
    },
  },
  plugins: [],
};
