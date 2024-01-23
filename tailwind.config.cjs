/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Changa", "sans-serif"],
      serif: ["Changa", "sans-serif"],
      Changa: ["Changa", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        info: "url('/info.webp')",
        activity_manager: "url('/activity_manager.webp')",
        news: "url('/news.webp')",
        whatsapp: "url('/whatsapp.webp')",
        logo: "url('/logo.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
