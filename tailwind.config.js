/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      // main layout width from Figma
      screens: {
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        brand: {
          brown: "#2F251D", // main brown
          navLight: "#EFC96D", // active nav item light
          navDark: "#AE6F28", // active nav item dark
        },
        grayHex: {
          light: "#F2F2F2", // light grey
        },
        surface: {
          card: "#FAF8ED", // card bg
        },
        textHex: {
          title: "#2D3134", // card title
          subtle: "#5B5F62", // light text
          black: "#484848", // general dark text
        },
        accent: {
          star: "#FCD53F", // rating star
        },
      },
      fontFamily: {
        // default body font
        sans: ["Montserrat", "system-ui", "sans-serif"],
        // for H1 + nav links
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 14px 1px rgba(0, 0, 0, 0.16)", // card shadow
      },
      maxWidth: {
        shell: "1440px", // for your page shell component
      },
      fontSize: {
        // navbar item text
        nav: [
          "12px",
          {
            lineHeight: "140%",
            letterSpacing: "0",
          },
        ],
      },
      borderRadius: {
        // tweak these to match Figma if needed
        card: "16px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
