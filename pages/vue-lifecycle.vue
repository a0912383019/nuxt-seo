<script setup lang="ts">
useSeoMeta({
  title: 'Vue 3 生命週期完整解析｜Composition API 對照、實作技巧',
  description:
    '完整對照 Vue 3 生命週期 Hook 與 Options API，解析 onMounted、watchEffect、v-model、ref 與 reactive 等核心觀念，幫助你快速掌握 Vue 組件行為與開發技巧。',
  ogTitle: 'Vue 3 生命週期對照與實作技巧',
  ogDescription:
    '學會 Vue 3 生命週期 Hook、watch vs watchEffect、v-model 雙向綁定原理與 ref/reactive 差異，強化你的 Composition API 開發能力。',
  ogImage: '/og-vue-lifecycle.png',
  ogUrl: 'https://your-site.com/vue-lifecycle',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Vue 3 生命週期完整教學｜搭配 Composition API 實作與觀念釐清',
  twitterDescription:
    '深入理解 Vue 3 的 setup、onMounted、onUpdated 等 Hook 差異與應用場景，包含 v-model 雙向綁定、watchEffect 與錯誤處理等實用技巧。',
  twitterImage: '/og-vue-lifecycle.png',
  keywords:
    'Vue 3, Vue 生命週期, Composition API, onMounted, onUpdated, watchEffect, v-model 原理, ref vs reactive, Vue 面試, Vue 雙向綁定, Vue Hooks 對照, Vue 教學'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <Breadcrumbs to="/vue-lifecycle" label="Vue 3 生命週期" />

    <section class="mb-12 mt-5">
      <h1 class="text-3xl font-extrabold text-gray-900 mb-4">Vue 3 生命週期</h1>
      <p class="text-gray-600 text-sm">
        學會對應 Composition API 的生命週期，有助於更穩定與清晰的元件開發。
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-bold text-gray-800 mb-3">生命週期 Hook 對應表</h2>
      <div class="w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th class="py-2 px-4">階段</th>
              <th class="py-2 px-4">Options API</th>
              <th class="py-2 px-4">Composition API</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="py-2 px-4">掛載前</td>
              <td class="py-2 px-4">beforeMount</td>
              <td class="py-2 px-4">onBeforeMount</td>
            </tr>
            <tr>
              <td class="py-2 px-4">掛載後</td>
              <td class="py-2 px-4">mounted</td>
              <td class="py-2 px-4">onMounted</td>
            </tr>
            <tr>
              <td class="py-2 px-4">更新前</td>
              <td class="py-2 px-4">beforeUpdate</td>
              <td class="py-2 px-4">onBeforeUpdate</td>
            </tr>
            <tr>
              <td class="py-2 px-4">更新後</td>
              <td class="py-2 px-4">updated</td>
              <td class="py-2 px-4">onUpdated</td>
            </tr>
            <tr>
              <td class="py-2 px-4">卸載前</td>
              <td class="py-2 px-4">beforeUnmount</td>
              <td class="py-2 px-4">onBeforeUnmount</td>
            </tr>
            <tr>
              <td class="py-2 px-4">卸載後</td>
              <td class="py-2 px-4">unmounted</td>
              <td class="py-2 px-4">onUnmounted</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-bold text-gray-800 mb-3">常見問題與觀念</h2>
      <ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
        <li>
          <strong>onMounted 和 created 差異？</strong> created 執行時 DOM 尚未存在，onMounted
          執行時才可操作 DOM
        </li>
        <li><strong>onUnmounted 有什麼用途？</strong> 常用於清理計時器、取消監聽或終止 API 請求</li>
        <li>
          <strong>setup() 什麼時候執行？</strong> 在 beforeCreate / created 之間，且是 Composition
          API 的進入點
        </li>
        <li>
          <strong>何時使用 onUpdated？</strong> 當你要在 DOM 渲染完後取值、重新計算、或處理畫面更新
        </li>
        <li>
          <strong>onActivated / onDeactivated 有什麼用途？</strong> 搭配 &lt;keep-alive&gt;
          使用，處理頁籤切換等情境
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">watch vs watchEffect 差異</h2>
      <p class="text-sm text-gray-700 mb-3">兩者皆用於追蹤變數變化，但用途不同：</p>
      <ul class="text-sm text-gray-700 list-disc ml-6 space-y-2">
        <li><code>watch</code>：需指定追蹤目標，支援新舊值</li>
        <li><code>watchEffect</code>：立即執行，會自動追蹤依賴變數</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">ref vs reactive 差異</h2>
      <p class="text-sm text-gray-700 mb-3">用於聲明響應式資料的兩種方式：</p>
      <ul class="text-sm text-gray-700 list-disc ml-6 space-y-2">
        <li><code>ref</code>：適用於基本型別，透過 <code>.value</code> 存取</li>
        <li><code>reactive</code>：適用於物件型別，可直接操作屬性</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">v-model 雙向綁定原理</h2>
      <p class="text-sm text-gray-700 mb-3">
        Vue 3 中的 <code>v-model</code> 實際上會對應 <code>:modelValue</code> 與
        <code>@update:modelValue</code>。
      </p>
      <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto"><code class="language-html">
&lt;input
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
/&gt;
</code></pre>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">v-model 修飾符（Modifiers）</h2>
      <p class="text-sm text-gray-700 mb-3">Vue 提供三個實用修飾符來處理輸入值格式：</p>
      <div class="w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-100 text-left">
            <tr>
              <th class="px-4 py-2">修飾符</th>
              <th class="px-4 py-2">功能</th>
              <th class="px-4 py-2">使用情境</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-2"><code>.trim</code></td>
              <td class="px-4 py-2">自動去除空白字元</td>
              <td class="px-4 py-2">輸入名稱、帳號避免空格</td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>.number</code></td>
              <td class="px-4 py-2">將輸入字串轉為數字</td>
              <td class="px-4 py-2">數字欄位如年齡、金額</td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>.lazy</code></td>
              <td class="px-4 py-2">延遲更新至 change 事件</td>
              <td class="px-4 py-2">避免即時更新，提高效能</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-4">
        <p class="text-sm mb-2">範例：</p>
        <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto"><code class="language-html">
&lt;input v-model.trim="name" /&gt;
&lt;input v-model.number="age" /&gt;
&lt;input v-model.lazy="email" /&gt;
</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-bold text-gray-800 mb-3">補充：錯誤處理與狀態追蹤</h2>
      <ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
        <li><code>onErrorCaptured</code>：類似 try/catch 的作用，用來集中錯誤處理</li>
        <li><code>watchEffect</code>：在 setup 中立即執行，用於追蹤 reactive 狀態</li>
      </ul>
    </section>

    <p class="mt-6 text-sm text-gray-600">
      想知道 Pinia 跟 Vuex 的區別嗎？參考：
      <NuxtLink to="/vuex-pinia" class="text-blue-500 hover:underline">Vuex 與 Pinia</NuxtLink>
    </p>
  </div>
</template>
