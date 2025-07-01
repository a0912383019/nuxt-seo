// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Frontend Developer Map',
      meta: [
        { name: 'description', content: '提供給前端概念強化學習指南' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Frontend Starter Map' },
        { property: 'og:description', content: '前端學習資源地圖' },
        { property: 'og:image', content: '/og-image.png' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/og-html-semantic.png' }]
    }
  },
  pages: true,
  ssr: true, // 預設開啟 SSR，適合 SEO
  nitro: {
    preset: 'netlify'
  },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  ui: {
    prefix: 'Nuxt'
  }
})