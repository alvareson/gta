// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["nuxt-directus", "@nuxtjs/robots"],

  plugins: [
    "~/plugins/vue-tel-input.client.ts",
    "~/plugins/thtml-directive.ts"
  ],

  css: ["~/assets/scss/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
            silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", href: "/favicon.svg" }],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: ["https://*"],
    },
  },

  robots: {
    rules: {
      UserAgent: '*',
      Disallow: ''
    }
  },

  ssr: true,
})
