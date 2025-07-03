<script setup lang="ts">
useSeoMeta({
  // 頁面標題：最重要的 SEO 元素，精確描述首頁內容，包含主關鍵字和品牌名。建議不超過 60 字元。
  title: '前端學習筆記 | 概念強化與實踐指南',

  // 頁面描述：對搜尋引擎和使用者來說很重要，簡潔說明網站提供什麼價值。建議 120-158 字元。
  description:
    '專為前端開發者打造的學習資源地圖，涵蓋 Vue 3、Nuxt、HTML 語意化、CSS Grid/Flex、TypeScript 等核心概念，透過實戰解決常見問題，助力技能提升。',

  // Open Graph 標題：用於社群分享時顯示的標題，通常更具吸引力。
  ogTitle: '前端學習筆記：從概念到實踐的完整指南',
  // Open Graph 描述：用於社群分享時顯示的描述，比 description 略短或更精煉。
  ogDescription:
    '探索前端開發的關鍵概念與最佳實踐！涵蓋 RWD、SEO、Vue 3、Nuxt、TypeScript 等主題，提供清晰筆記經驗分享。',
  // Open Graph 圖片：社群分享預覽圖，請確保圖片路徑正確且為絕對路徑，推薦 1200x630px。
  ogImage: 'https://vuefdseo.com/public/og-main-map.png', // **重要：替換為你首頁專屬的 OG 圖片！避免使用其他頁面的圖片**
  // Open Graph URL：社群分享時此頁面的標準 URL。
  ogUrl: 'https://vuefdseo.com/', // **重要：替換成你網站的首頁 URL**

  // Twitter Card 類型：推薦 'summary_large_image'，顯示大圖預覽。
  twitterCard: 'summary_large_image',
  // Twitter 標題：Twitter 專屬標題，可與 ogTitle 類似。
  twitterTitle: '前端開發者必備：學習資源與實戰經驗分享',
  // Twitter 描述：Twitter 專屬描述，可與 ogDescription 類似。
  twitterDescription:
    '一個集結前端核心概念、RWD、SEO 實踐與問題解決經驗的學習平台，助你系統化提升前端技能。',
  // Twitter 圖片：同 ogImage。
  twitterImage: 'https://vuefdseo.com/public/og-main-map.png', // **同上，替換為首頁專屬圖片**

  // 關鍵字：幫助搜尋引擎理解頁面主題，但不直接影響排名，應自然包含於內容中。
  keywords:
    'YU 的前端, YU的前端, Yu 的前端, Yu的前端 ,前端學習, 前端資源, 前端開發, Vue 3, Nuxt, TypeScript, HTML 語意化, CSS Grid, Flexbox, RWD, 響應式設計, SEO 優化, JavaScript, 自我學習'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <section class="mb-12">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        YU 的前端學習筆記
      </h1>
      <p class="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
        這是一個
        <strong class="text-orange-300 font-semibold">自我學習</strong>
        的網站，旨在整理在
        <strong class="text-orange-300 font-semibold">學習前端</strong>
        過程中遇到的，那些需要更深入理解的關
        <strong class="text-orange-300 font-semibold">重要概念</strong>
        。
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">為什麼要建立這個網站？</h2>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        在實際工作中有許多技能尚未使用到，或是可以更近一步的地方。尤其在 AI
        工具普及的今天，雖然能輕鬆獲得解決方案，但卻常常不清楚背後的原理或核心概念。
      </p>
      <p class="text-sm md:text-base text-gray-700 leading-relaxed">
        過去主要接觸後台網站開發，對響應式網頁設計 (RWD) 的需求不高，也缺乏 SEO
        經驗。因此，我希望透過這個網站，親手實踐並探索這些領域。
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-snug">
        在工作、學習與實作過程中遇到的問題
      </h2>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>RWD 切版時，縮小畫面後常忽略排版錯誤。</li>
        <li>如何設計 SEO？SSR 與 CSR 的概念與應用？</li>
        <li>元件設計自由度過高，缺乏統一規範導致維護困難。</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-snug">
        從錯誤中學到的事
      </h2>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        過去開發後台時，未針對不同裝置進行顯示調整，導致在響應式實作中遇到許多排版問題。為此，我開始深入理解
        <span class="text-green-600 font-semibold">Flexbox</span>
        、
        <span class="text-green-600 font-semibold">CSS Grid</span>
        和
        <span class="text-green-600 font-semibold">media query</span>
        的應用。
      </p>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        為了讓網頁更容易被 Google 等搜尋引擎找到並提升排名，進而吸引更多免費流量，我深入研究了
        SEO。特別是對於 Vue 應用，可以透過 Nuxt 實現伺服器端渲染 (SSR)。
      </p>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        SSR (Server-Side Rendering)： 網頁內容在伺服器上生成完整的 HTML，然後傳送給瀏覽器。這對 SEO
        非常友好，因為搜尋引擎可以直接讀取到完整的內容。
      </p>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        CSR (Client-Side Rendering)： 伺服器僅傳送一個空的 HTML 骨架和 JavaScript
        檔案給瀏覽器，內容則由瀏覽器（客戶端）上的 JavaScript 生成和填充。這種方式對 SEO 較不友好。
      </p>
      <p class="text-sm md:text-base text-gray-700 leading-relaxed">
        當需求不斷增加或調整時，在基礎元件上持續增加功能會使後期維護變得異常困難。因此，即使元件之間存在高度相似性，也應適當地進行拆分，讓單一元件只負責更單純的事情。（例如：一個高度客製化的表格元件，如果既支援表單輸入又支援複雜表格顯示，當功能越加複雜時，應考慮將這兩種職責拆分為不同的元件。）
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-snug">此網站使用技術</h2>
      <ul class="list-disc ml-6 text-base text-gray-700 space-y-2">
        <li>
          <span class="underline">Nuxt 3 + Vue 3 + TypeScript</span>： 實現 SSR、SEO
          優化與組件化開發，提供強大的框架支援。
        </li>
        <li>
          <span class="underline">TailwindCSS</span>： 提供快速且靈活的開發體驗，同時完美支援 RWD
          響應式設計。
        </li>
        <li>
          <span class="underline">npm + Vite</span>：
          作為快速且輕量的開發工具鏈，提供高效的開發和構建體驗。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-snug">
        這不只是作品，也是紀錄
      </h2>
      <p class="text-sm md:text-base text-gray-700 leading-relaxed">
        這個網站不僅是展示我的前端技能和成果，更是一種學習旅程的痕跡與知識的紀錄。我希望能透過這樣的方式，系統性地整理自己的知識體系，同時也幫助其他前端開發者理解一些容易被忽略或混淆的重要概念。
      </p>
    </section>
  </div>
</template>
<style scoped></style>
