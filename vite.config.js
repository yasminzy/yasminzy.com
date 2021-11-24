import { defineConfig } from "vite"
import { snippetPlugin } from "./src/assets/script/snippet.ts"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Markdown from "vite-plugin-md"
import Pages from "vite-plugin-pages"
import Path from "path"
import Shiki from "markdown-it-shiki"
import Slugify from "slugify"
import Vue from "@vitejs/plugin-vue"
import WindiCSS from "vite-plugin-windicss"
import ViteRadar from "vite-plugin-radar"

const markdownWrapperClasses = "md"

function toSlug(string) {
  return Slugify(string, { lower: true })
}

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${Path.resolve(__dirname, "src")}/`
    }
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),

    Pages({
      extensions: ["vue", "md"]
    }),

    AutoImport({
      imports: ["@vueuse/core", "pinia", "vue-router", "vue"]
    }),

    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [IconsResolver({ prefix: "" })]
    }),

    Icons({
      autoInstall: true
    }),

    WindiCSS(),

    Markdown({
      wrapperComponent: "base-md",
      wrapperClasses: markdownWrapperClasses,

      markdownItSetup(md) {
        md.use(require("markdown-it-anchor"), {
          permalink: require("markdown-it-anchor").permalink.headerLink(),
          slugify: toSlug
        })

          .use(require("markdown-it-toc-done-right"), {
            containerClass: "toc",
            slugify: toSlug
          })

          .use(snippetPlugin, "src")

          .use(Shiki, {
            theme: { light: "solarized-light", dark: "solarized-dark" }
          })
      }
    }),

    ViteRadar({
      analytics: {
        id: "G-H93KXN50GC"
      }
    })
  ],

  optimizeDeps: {
    include: ["@vueuse/core", "pinia", "vue-router", "vue"]
  }
})
