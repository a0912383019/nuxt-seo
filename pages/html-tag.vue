<script setup lang="ts">
useSeoMeta({
  // 頁面標題：精確描述頁面內容，包含主關鍵字，結尾可帶網站名
  title: 'HTML 語意化與無障礙設計 (a11y)｜前端指南',
  // 頁面描述：簡潔說明頁面內容，包含關鍵字，吸引使用者點擊。長度約 120-158 字元。
  description:
    '學習 HTML 語意化標籤（Semantic HTML）的重要性與無障礙設計（Accessibility / a11y）的實務技巧，提升網站 SEO 表現、可讀性與所有用戶的可用性。',

  // Open Graph 標題：用於社群分享時顯示的標題 (通常比 title 短，更具號召力)
  ogTitle: 'HTML 語意化與無障礙設計：打造友善網頁',
  // Open Graph 描述：用於社群分享時顯示的描述 (通常比 description 短，更精煉)
  ogDescription:
    '掌握 Semantic HTML 標籤（如 header, main, section）與 a11y 實務，包含 ARIA 屬性、alt 文字、鍵盤導航等，讓你的網站更具包容性。',
  // Open Graph 圖片：社群分享時顯示的預覽圖，請確保圖片存在且路徑正確
  ogImage: 'https://your-site.com/images/og-html-semantic.png', // **建議使用絕對路徑，並確保圖片是 1.91:1 比例，例如 1200x630**
  // Open Graph URL：社群分享時的網頁連結，請替換為此頁面的實際 URL
  ogUrl: 'https://your-site.com/html-tag', // **重要：替換成你網站這個頁面的實際 URL**

  // Twitter Card 類型：推薦 'summary_large_image'，圖片會更大
  twitterCard: 'summary_large_image',
  // Twitter 標題：Twitter 分享專屬標題 (可與 ogTitle 相同或微調)
  twitterTitle: 'HTML 語意化與無障礙設計：從入門到實踐',
  // Twitter 描述：Twitter 分享專屬描述 (可與 ogDescription 相同或微調)
  twitterDescription:
    '詳細解析 HTML 語意化標籤的應用場景，並提供無障礙設計（a11y）的基礎知識與常見錯誤修正，助你打造高品質網頁。',
  // Twitter 圖片：同 ogImage
  twitterImage: 'https://your-site.com/images/og-html-semantic.png', // **同上，建議使用絕對路徑**

  // 關鍵字：幫助搜尋引擎理解頁面主題，但不直接影響排名，應自然包含於內容中
  keywords:
    'HTML 語意化, Semantic HTML, 無障礙設計, Accessibility, a11y, ARIA, alt 屬性, 標籤語義, SEO 優化, 網頁可用性, header, nav, main, section, article, aside, footer, h1, figure, time, address, WCAG'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <Breadcrumbs to="/html-tag" label="HTML 語意化結構與無障礙設計"></Breadcrumbs>
    <section class="mb-12 mt-5">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        HTML 語意化結構與無障礙設計
      </h1>
      <p class="text-sm text-slate-500">2025年7月1日</p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">
        什麼是語意化（Semantic HTML）？
      </h2>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        語意化 HTML
        是使用能清楚表達內容「意義」的標籤（Tag），讓程式碼對人與機器都更易於理解，例如搜尋引擎與輔助工具（如螢幕閱讀器）。
      </p>
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-snug">優點：</h2>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>提升 SEO（搜尋引擎更容易理解內容）</li>
        <li>改善可維護性與可讀性</li>
        <li>讓輔助技術能正確理解結構（提升無障礙性）</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">常用語意化 HTML 標籤整理</h2>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li><code class="text-blue-500 font-semibold">header</code>：頁首</li>
        <li><code class="text-blue-500 font-semibold">nav</code>：導航鏈結區</li>
        <li><code class="text-blue-500 font-semibold">main</code>：主要內容區，每頁僅可出現一次</li>
        <li>
          <code class="text-blue-500 font-semibold">section</code>：有標題的內容區塊（搭配 &lt;h2>
          等）
        </li>
        <li>
          <code class="text-blue-500 font-semibold">article</code>：獨立的資訊（如部落格文章、留言）
        </li>
        <li>
          <code class="text-blue-500 font-semibold">aside</code>：側欄，次要內容（如推薦連結、廣告）
        </li>
        <li><code class="text-blue-500 font-semibold">footer</code>：頁腳</li>
        <li><code class="text-blue-500 font-semibold">h1 ~ h6</code>：結構化標題層級</li>
        <li>
          <code class="text-blue-500 font-semibold">figure / figcaption</code
          >：圖文區塊，有描述文字的圖像
        </li>
        <li><code class="text-blue-500 font-semibold">time</code>：時間，用來標註時間資訊</li>
        <li>
          <code class="text-blue-500 font-semibold">address</code>：聯絡資訊，例如 email、公司地址
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">
        什麼是無障礙設計（Accessibility / a11y）?
      </h2>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        無障礙設計是為了讓網站能讓身心障礙者也能正常使用，例如視障者使用螢幕閱讀器。
      </p>
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-snug">基礎知識：</h2>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>
          ARIA（Accessible Rich Internet Applications）：補充語意的屬性
          常見屬性如：<code>aria-label</code>、<code>aria-hidden</code>、<code>role</code>、
          <code>aria-expanded</code>
        </li>
        <li>對比與文字清晰度：顏色對比需足夠（建議使用 WCAG 標準）</li>
        <li>替代文字（alt）：所有圖片都應有對應的描述</li>
        <li>語意化 HTML 本身已經有助於無障礙！不要過度依賴 div 和 span</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold mb-8 text-gray-900">常見錯誤與注意事項</h2>
      <div class="overflow-x-auto bg-white rounded-lg shadow-sm max-w-full sm:rounded-lg">
        <table class="min-w-[640px] divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 30%"
              >
                錯誤
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                原因
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                修正建議
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                用太多 &lt;div&gt; 或 &lt;span&gt; 取代語意化標籤
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                可讀性與可被理解性差
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                使用 &lt;section&gt;、&lt;nav&gt; 等語意標籤
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                忽略 &lt;h1&gt; ~ &lt;h6&gt; 階層順序
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                螢幕閱讀器無法正確導覽
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                從 &lt;h1&gt; 開始逐層應用，不要跳階
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                缺少 alt 屬性
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                視障者無法理解圖片內容
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                加上描述性 alt，非裝飾圖可回 alt=""
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                忘記設計 Tab 操作流程
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">鍵盤使用者無法操作</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                確保能用 Tab 鍵操作按鈕 / 表單 / 連結
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                忽略語言屬性
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                螢幕閱讀器無法正確發音
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                &lt;html lang="zh-Hant"&gt; (或 en)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <p class="mt-6 text-sm text-gray-600">
      想了解更多的排版技巧？參考：
      <NuxtLink to="/css-flex" class="text-blue-500 hover:underline">熟悉 CSS Grid / Flex</NuxtLink>
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
