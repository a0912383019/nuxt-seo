<script setup lang="ts">
useSeoMeta({
  // 頁面標題：精確描述頁面內容，包含主關鍵字，結尾可帶網站名
  title: 'CSS Grid 與 Flexbox 完整指南｜前端排版技巧與範例',
  // 頁面描述：簡潔說明頁面內容，包含關鍵字，吸引使用者點擊。長度約 120-158 字元。
  description:
    '全面解析 CSS Flexbox 與 Grid 佈局的應用：從一維到二維排版，詳解容器與項目屬性，掌握 RWD 響應式設計核心，並提供實用範例與屬性對照表。',

  // Open Graph 標題：用於社群分享時顯示的標題 (通常比 title 短，更具號召力)
  ogTitle: 'CSS Grid / Flexbox 終極指南：掌握現代前端排版',
  // Open Graph 描述：用於社群分享時顯示的描述 (通常比 description 短，更精煉)
  ogDescription:
    '深入剖析 Flexbox 與 Grid 的排版概念、常用屬性與 RWD 技巧。一篇搞懂一維與二維佈局差異，提升你的網頁佈局能力。',
  // Open Graph 圖片：社群分享時顯示的預覽圖，請確保圖片存在且路徑正確
  ogImage: 'https://vuefdseo.com/public/og-css-grid-flex.png', // **建議使用絕對路徑，並確保圖片是 1.91:1 比例，例如 1200x630**
  // Open Graph URL：社群分享時的網頁連結，請替換為此頁面的實際 URL
  ogUrl: 'https://vuefdseo.com/css-flex', // **重要：替換成你網站這個頁面的實際 URL**

  // Twitter Card 類型：推薦 'summary_large_image'，圖片會更大
  twitterCard: 'summary_large_image',
  // Twitter 標題：Twitter 分享專屬標題 (可與 ogTitle 相同或微調)
  twitterTitle: 'CSS Grid / Flexbox：前端 RWD 排版必學利器',
  // Twitter 描述：Twitter 分享專屬描述 (可與 ogDescription 相同或微調)
  twitterDescription:
    '詳細解說 Flexbox 與 Grid 的核心屬性與應用場景，助你輕鬆實現複雜的響應式網頁佈局。',
  // Twitter 圖片：同 ogImage
  twitterImage: 'https://vuefdseo.com/public/og-css-grid-flex.png', // **同上，建議使用絕對路徑**

  // 關鍵字：幫助搜尋引擎理解頁面主題，但不直接影響排名，應自然包含於內容中
  keywords:
    'CSS Flexbox, CSS Grid, 網頁排版, RWD, 響應式設計, 前端布局, Flex 屬性, Grid 屬性, display flex, display grid, justify-content, align-items, grid-template-columns, gap, CSS 教學'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <Breadcrumbs to="/css-flex" label="熟悉 CSS Grid / Flex"></Breadcrumbs>
    <section class="mb-12 mt-5">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        熟悉 CSS Grid / Flex
      </h1>
      <p class="text-sm text-slate-500">2025年7月1日</p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">為什麼要學 Grid 和 Flex？</h2>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>Flex 適合「一維」排版（單一方向：水平或垂直）</li>
        <li>Grid 適合「二維」排版（同時控制行與列）</li>
        <li>現代 RWD（響應式）網頁設計的主力工具，不再需要使用 float、position 搞定複雜排版</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">CSS Flexbox 基本概念</h2>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>Flex 是容器（container）和項目（items）之間的關係</li>
        <li>設定 display: flex 就啟用彈性盒子</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-8 text-gray-900">容器常用屬性（父層）</h2>
      <div class="overflow-x-auto bg-white rounded-lg shadow-sm max-w-full sm:rounded-lg">
        <table class="min-w-[640px] divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 30%"
              >
                屬性
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                功能
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                常見值
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>display</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">啟用 Flex</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>flex</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>flex-direction</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">主軸方向</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>row</code>（預設）, <code>column</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>justify-content</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">主軸對齊</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>flex-start</code>, <code>center</code>, <code>space-between</code>,
                <code>space-around</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>align-items</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                交叉軸對齊（「垂直於主軸」的方向上如何對齊）
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>stretch</code>, <code>center</code>, <code>flex-start</code>,
                <code>flex-end</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>gap</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">項目間距</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>gap: 1rem</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>flex-wrap</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                控制當子元素（flex item）超出容器寬度時，是否換行
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>nowrap</code>：（預設）不換行，項目會被壓縮或溢出容器。<br />
                <code>wrap</code>：超出時換到下一行，從上到下排列。<br />
                <code>wrap-reverse</code>：超出時換行，但從下到上排列。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-8 text-gray-900">項目常用屬性（子層）</h2>
      <div class="overflow-x-auto bg-white rounded-lg shadow-sm max-w-full sm:rounded-lg">
        <table class="min-w-[640px] divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 30%"
              >
                屬性
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                功能
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>flex-grow</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">放大比例</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>flex-shrink</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">縮小比例</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>flex-basis</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">初始大小</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>flex</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                上三個的縮寫，例如：<code>flex: 1 1 auto</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>align-self</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">單個項目對齊</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-12">
      <h3 class="text-xl md:text-xl font-bold text-gray-800 mb-3">
        <code>align-items</code> 與 <code>justify-content</code> 的區別
      </h3>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li><code>align-items</code>： 控制 Flex 項目在交叉軸上的對齊</li>
        <li><code>justify-content</code>： 控制 Flex 項目在主軸上的對齊</li>
      </ul>
      <br />
      <span>這兩者一起使用，可以實現 Flex 項目在兩個方向上的精確定位</span>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">CSS Grid 基本概念</h2>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>Grid 是一個明確定義「行」和「列」的系統</li>
        <li>適合複雜排版（例如卡片、儀表板、表格）</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-8 text-gray-900">容器常用屬性（父層）</h2>
      <div class="overflow-x-auto bg-white rounded-lg shadow-sm max-w-full sm:rounded-lg">
        <table class="min-w-[640px] divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 30%"
              >
                屬性
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                功能
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                常見值
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>display</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">啟用 Grid</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>grid</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>grid-template-columns</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">定義欄數</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>repeat(3, 1fr)</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>grid-template-rows</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">定義列數</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>100px auto 1fr</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>gap</code> / <code>row-gap</code> / <code>column-gap</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">間距</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>gap: 1rem</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>justify-items</code> / <code>align-items</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">項目對齊</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>center</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>place-items</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">合併對齊設定</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>center</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-8 text-gray-900">項目常用屬性（子層）</h2>
      <div class="w-full overflow-x-auto bg-white rounded-lg shadow-sm max-w-full sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                屬性
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 65%"
              >
                功能
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>grid-column</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">占幾欄</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>grid-row</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">占幾行</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                <code>place-self</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">單一對齊設定</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <p class="mt-6 text-sm text-gray-600">
      除了排版技巧還想了解一些 javascript 嗎？參考：
      <NuxtLink to="/js-es6" class="text-blue-500 hover:underline">ES6+ 語法與設計模式</NuxtLink>
    </p>
  </div>
</template>
<style scoped>
code {
  background-color: #f3f3f3;
  border-radius: 0.25rem;
  font-size: 0.875em;
  font-weight: 500;
  padding: 0.15rem 0.3rem;
}
</style>
