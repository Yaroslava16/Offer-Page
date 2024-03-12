// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
})
