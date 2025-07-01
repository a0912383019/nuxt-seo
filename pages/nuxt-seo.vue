<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt 與 SEO 最佳實踐｜前端學習資源地圖',
  description:
    '了解 Nuxt 如何強化 Vue SEO 能力，掌握 SSR、SSG、CSR、ISR 等渲染策略，選擇適合專案的最佳方案。',
  ogTitle: 'Nuxt 與 SEO 最佳實踐',
  ogDescription: 'SSR、CSR、SSG、ISR、PPR 差異比較，選擇最適合你的 Vue 項目渲染模式。',
  ogImage: '/og-nuxt-seo.png',
  ogUrl: 'https://your-site.com/nuxt-seo',
  twitterCard: 'summary_large_image',
  twitterTitle: 'SEO 與 Nuxt 最佳實踐',
  twitterDescription: 'SSR、CSR、SSG、ISR、PPR 差異比較，選擇最適合你的 Vue 項目渲染模式。',
  twitterImage: '/og-nuxt-seo.png',
  keywords: 'Nuxt, Vue SEO, SSR, CSR, SSG, ISR, PPR, SEO 最佳化, 渲染方式'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <Breadcrumbs to="/nuxt-seo" label="SEO 與 Nuxt" />

    <section class="mb-12 mt-5">
      <h1 class="text-3xl font-extrabold text-gray-900 mb-4">
        SEO 與 Nuxt：Vue 的搜尋引擎優化方案
      </h1>
      <p class="text-gray-600 text-sm">
        Vue 本身是用 JavaScript 動態渲染的框架，不利 SEO。Nuxt 則透過支援 SSR、SSG 等模式，強化 SEO
        能力，使內容可被搜尋引擎抓取。
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-extrabold text-gray-900 mb-4">什麼是 SEO？</h2>
      <p class="text-gray-700 text-base leading-relaxed">
        SEO 全名是 <strong>搜尋引擎優化（Search Engine Optimization）</strong>。 簡而言之，SEO
        的目標是透過優化你的網站，讓它在 Google、Bing 等搜尋引擎的
        <strong>自然搜尋結果</strong>中獲得更高的排名，進而吸引更多免費且有目標性的流量到你的網站。
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">為什麼 SEO 很重要？</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700 text-sm md:text-base">
        <li>
          <strong>增加曝光和流量：</strong>
          排名越高，被看到的機會越大，可帶來更多潛在訪客。
        </li>
        <li>
          <strong>免費的流量：</strong>
          相對於 Google Ads 等付費廣告，SEO 所帶來的點擊與訪問是「免費」的。
        </li>
        <li>
          <strong>提高品牌知名度與信任感：</strong>
          在搜尋結果中排名靠前的網站，通常被使用者認為更專業、值得信賴。
        </li>
        <li>
          <strong>精準的潛在客戶：</strong>
          搜尋引擎使用者通常是帶著需求進行搜尋，因此導入的訪客轉換率通常較高。
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">舉個例子</h2>
      <p class="text-gray-700 text-sm md:text-base">
        想像一下：當使用者在 Google 上搜尋「Vue SEO 最佳實踐」時，<br />
        若你的網站剛好提供相關內容，且 SEO
        做得好，那麼它就可能出現在搜尋結果的第一頁，甚至是前幾名，從而大幅提高你的網站流量與曝光度。
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">常見渲染模式比較</h2>
      <div class="w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-2 text-left">模式</th>
              <th class="px-4 py-2 text-left">特性</th>
              <th class="px-4 py-2 text-left whitespace-nowrap">SEO 友善</th>
              <th class="px-4 py-2 text-left">常見使用情境</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-2 font-medium">CSR (Client-Side Rendering)</td>
              <td class="px-4 py-2">全部由瀏覽器渲染，初始空白</td>
              <td class="px-4 py-2 whitespace-nowrap">
                ✘ <br />
                不利 SEO
              </td>
              <td class="px-4 py-2">SPA 應用，如後台管理系統</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">SSR (Server-Side Rendering)</td>
              <td class="px-4 py-2">伺服器回傳已渲染 HTML</td>
              <td class="px-4 py-2">
                ✔ <br />
                良好
              </td>
              <td class="px-4 py-2">內容即時變動的網站，如新聞、電商</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">SSG (Static Site Generation)</td>
              <td class="px-4 py-2">打包時預先產生 HTML</td>
              <td class="px-4 py-2">✔ <br />非常好</td>
              <td class="px-4 py-2">內容不常變動，如部落格、說明頁</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">ISR (Incremental Static Regeneration)</td>
              <td class="px-4 py-2">靜態頁面可背景再生</td>
              <td class="px-4 py-2">✔</td>
              <td class="px-4 py-2">Next.js 主打，Nuxt 可類比 revalidate</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">PPR (Payload Partial Rendering)</td>
              <td class="px-4 py-2">Nuxt 3 的新特性，結合 SSR/SSG 最佳處</td>
              <td class="px-4 py-2">✔</td>
              <td class="px-4 py-2">Nuxt 3 特有，加速大型站點渲染</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-bold text-gray-800 mb-4">如何讓 Vue 做到 SEO？</h2>
      <ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
        <li>使用 Nuxt 開啟 SSR 或選擇 SSG 模式</li>
        <li>善用 <code>useSeoMeta()</code> 設定 meta 標籤</li>
        <li>使用 <code>useHead()</code> 或 <code>useSeoMeta()</code> 管理 title、description</li>
        <li>提供 og 標籤與 Twitter Card 提升社群分享預覽</li>
        <li>為重要路由加入 sitemap，提升爬蟲可見度</li>
      </ul>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-bold text-gray-800 mb-4">業界趨勢與建議</h2>
      <ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
        <li>企業級網站：選擇 SSR 或 PPR，確保 SEO 與效能</li>
        <li>內容導向網站：選擇 SSG 或 ISR，降低伺服器負載</li>
        <li>互動性高或登入後頁面：使用 CSR 或混合渲染</li>
        <li>若搭配 CDN，可考慮 ISR + edge functions 提升全球響應速度</li>
      </ul>
    </section>

    <p class="mt-6 text-sm text-gray-600">
      文章已經到底囉～沒有不散的宴席，只有學不完的知識！
      <NuxtLink to="/" class="text-blue-500 hover:underline">返回首頁</NuxtLink>
    </p>
  </div>
</template>
