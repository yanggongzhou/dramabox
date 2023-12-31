// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: false, // 辅助工具
  // @ts-ignore
  css: [
    'video.js/dist/video-js.css',
    '~/assets/css/main.css',
  ],
  modules: [
    "@vant/nuxt",
    "@pinia/nuxt",
    '@nuxtjs/eslint-module',
  ],
  vant: {
    // importStyle: true,
    // lazyload: false,
    // importStyle: true,
    // excludeExports: ['Lazyload', 'Locale'],
    // components: [],
    // imports: [],
    // include: [],
    // exclude: [],
  },
  // styleResources: {
  //   // scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss']
  // }
})
