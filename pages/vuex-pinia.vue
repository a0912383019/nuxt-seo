<script setup lang="ts">
useSeoMeta({
  title: 'ES6+ 語法與設計模式｜前端學習筆記',
  description: '學習 ES6+ 語法改寫技巧與常見設計模式應用，強化 JavaScript 現代開發能力。',
  ogTitle: 'ES6+ 語法與設計模式',
  ogDescription: '快速掌握 let、箭頭函式、模組化與 async/await 等現代 JS 技巧。',
  ogImage: 'https://vuefdseo.com/public/og-js-es6.png',
  ogUrl: 'https://vuefdseo.com/js-es6',
  twitterCard: 'summary_large_image',
  twitterTitle: 'ES6+ 語法與設計模式',
  twitterDescription: '快速掌握 let、箭頭函式、模組化與 async/await 等現代 JS 技巧。',
  twitterImage: 'https://vuefdseo.com/public/og-js-es6.png',
  keywords:
    'ES6, JavaScript 語法, TypeScript 泛型, 條件型別, JavaScript 設計模式, let const, arrow function, async await, 型別推論, Partial, Pick, Omit, Record'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <Breadcrumbs to="/vuex-pinia" label="Vuex 與 Pinia 差異比較" />

    <!-- 標題 -->
    <section class="mb-12 mt-5">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Vuex vs Pinia：差異與概念釐清</h1>
      <p class="text-sm text-gray-700">
        Vuex 是 Vue 2 的官方狀態管理方案，Pinia 則是 Vue 團隊在 Vue 3
        中推薦的新方案，具有更輕量、TypeScript 支援佳等優勢。
      </p>
    </section>

    <!-- 比較表 -->
    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">核心差異比較</h2>
      <div class="w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2">項目</th>
              <th class="px-4 py-2">Vuex</th>
              <th class="px-4 py-2">Pinia</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-2">模組化</td>
              <td class="px-4 py-2">需手動拆分 modules</td>
              <td class="px-4 py-2">天然支持多 Store</td>
            </tr>
            <tr>
              <td class="px-4 py-2">語法</td>
              <td class="px-4 py-2">mutation/action 分離，語法冗長</td>
              <td class="px-4 py-2">直接寫函式，語法精簡</td>
            </tr>
            <tr>
              <td class="px-4 py-2">DevTools 支援</td>
              <td class="px-4 py-2">支援</td>
              <td class="px-4 py-2">支援，且更清楚</td>
            </tr>
            <tr>
              <td class="px-4 py-2">TypeScript 支援</td>
              <td class="px-4 py-2">複雜，需自定型別</td>
              <td class="px-4 py-2">天然支援，型別推斷好</td>
            </tr>
            <tr>
              <td class="px-4 py-2">Vue 版本</td>
              <td class="px-4 py-2">Vue 2.x / Vue 3</td>
              <td class="px-4 py-2">Vue 3 官方推薦</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 概念釐清 -->
    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">常見觀念釐清</h2>
      <ul class="list-disc text-sm text-gray-700 ml-6 space-y-2">
        <li>
          <strong>Vuex 是 Flux 架構：</strong> 需要透過 <code>commit</code>、<code>dispatch</code>
          操作，較為繁瑣
        </li>
        <li>
          <strong>Pinia 是 Composition API 設計：</strong> 與 setup 語法一致，邏輯更集中，學習成本低
        </li>
        <li><strong>Pinia 中沒有 mutation：</strong> state 可直接修改（支援 proxy 反應性）</li>
        <li>
          <strong>多 Store 管理更彈性：</strong> 可根據功能定義多個獨立 store，避免大型 Vuex
          文件拆分混亂
        </li>
      </ul>
    </section>

    <!-- Pinia 範例 -->
    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">簡易 Pinia 實作範例</h2>
      <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto"><code class="language-ts">
// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () =&gt; ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
</code></pre>

      <pre
        class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto mt-2"
      ><code class="language-html">
&lt;script setup lang="ts"&gt;
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="counter.increment"&gt;加一：&#123;&#123; counter.count &#125;&#125;&lt;/button&gt;
&lt;/template&gt;
</code></pre>
    </section>

    <!-- 適合誰用哪個？ -->
    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">何時該選用 Pinia？</h2>
      <ul class="list-disc text-sm text-gray-700 ml-6 space-y-2">
        <li>正在使用 Vue 3，建議選用 Pinia（官方推薦）</li>
        <li>需要較佳的 TypeScript 開發體驗</li>
        <li>希望結合 Composition API 管理邏輯</li>
        <li>需要多 store 模組化管理更簡潔</li>
      </ul>
    </section>

    <p class="mt-6 text-sm text-gray-600">
      想知道用 Vue 做出一個 SEO 網站嗎？參考：
      <NuxtLink to="/nuxt-seo" class="text-blue-500 hover:underline">SEO 與 Nuxt</NuxtLink>
    </p>
  </div>
</template>
