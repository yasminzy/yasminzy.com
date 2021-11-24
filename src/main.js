import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import routes from "virtual:generated-pages"
import App from "./App.vue"

import "./plugins/chart.js"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/assets.css"

import "virtual:windi.css"

import "./main.css"

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHistory(),
  routes
})
const store = createPinia()

app.use(head).use(router).use(store).mount("#app")
