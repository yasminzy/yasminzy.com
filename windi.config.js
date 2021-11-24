import { defineConfig } from "vite-plugin-windicss"

export default defineConfig({
  preflight: false,
  attributify: true,
  transformCSS: "pre",

  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      mono: ["Fira Code", "sans-serif"]
    },

    colors: {
      blue: "#268bd2",
      cyan: "#2aa198",
      green: "#859900",
      magenta: "#d33682",
      orange: "#cb4b16",
      red: "#dc322f",
      violet: "#6c71c4",
      yellow: "#b58900"
    }
  }
})
