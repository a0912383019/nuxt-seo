<script setup lang="ts">
const route = useRoute()

// 判斷連結是否是當前活躍的路由
const isActiveLink = (path: string) => {
  // 檢查當前路由的路徑是否完全匹配連結路徑
  // 或者，如果連結路徑是當前路由路徑的父級，也可能視為活躍
  return route.path === path || route.path.startsWith(path + '/')
}
</script>
<template>
  <nav class="flex flex-col gap-4 mt-8 text-sm md:text-base">
    <div class="border-l-4 border-orange-500 pl-4 py-2">
      <NuxtLink to="/" class="font-bold text-lg !text-orange-600">前端工程師學習筆記</NuxtLink>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">HTML / CSS</h3>
      <ul class="space-y-2">
        <li
          class="border-l-2 pl-4 transition-colors duration-200"
          :class="{
            'border-blue-500': isActiveLink('/html-tag'),
            'border-gray-300': !isActiveLink('/html-tag')
          }"
        >
          <NuxtLink
            to="/html-tag"
            class="block text-gray-700 hover:text-blue-600 py-1"
            :class="{
              'text-blue-600 font-semibold': isActiveLink('/html-tag')
            }"
            >HTML 語意化結構與無障礙設計</NuxtLink
          >
        </li>
        <li
          class="border-l-2 pl-4 transition-colors duration-200"
          :class="{
            'border-blue-500': isActiveLink('/css-flex'),
            'border-gray-300': !isActiveLink('/css-flex')
          }"
        >
          <NuxtLink
            to="/css-flex"
            class="block text-gray-700 hover:text-blue-600 py-1"
            :class="{
              'text-blue-600 font-semibold': isActiveLink('/css-flex')
            }"
            >熟悉 CSS Grid / Flex</NuxtLink
          >
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">JavaScript</h3>
      <ul class="space-y-2">
        <li
          class="border-l-2 pl-4 transition-colors duration-200"
          :class="{
            'border-blue-500': isActiveLink('/js-es6'),
            'border-gray-300': !isActiveLink('/js-es6')
          }"
        >
          <NuxtLink
            to="/js-es6"
            class="block text-gray-700 hover:text-blue-600 py-1"
            :class="{
              'text-blue-600 font-semibold': isActiveLink('/js-es6')
            }"
            >ES6+ 語法與設計模式</NuxtLink
          >
        </li>
        <li
          class="border-l-2 pl-4 transition-colors duration-200"
          :class="{
            'border-blue-500': isActiveLink('/typescript'),
            'border-gray-300': !isActiveLink('/typescript')
          }"
        >
          <NuxtLink
            to="/ts"
            class="block text-gray-700 hover:text-blue-600 py-1"
            :class="{
              'text-blue-600 font-semibold': isActiveLink('/typescript')
            }"
            >TypeScript 的泛型與條件型別應用</NuxtLink
          >
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Vue</h3>
      <ul class="space-y-2">
        <li
          class="border-l-2 pl-4 transition-colors duration-200"
          :class="{
            'border-blue-500': isActiveLink('/vue-lifecycle'),
            'border-gray-300': !isActiveLink('/vue-lifecycle')
          }"
        >
          <NuxtLink
            to="/vue-lifecycle"
            class="block text-gray-700 hover:text-blue-600 py-1"
            :class="{
              'text-blue-600 font-semibold': isActiveLink('/vue-lifecycle')
            }"
            >Vue 生命週期</NuxtLink
          >
        </li>
        <li
          class="border-l-2 pl-4 transition-colors duration-200"
          :class="{
            'border-blue-500': isActiveLink('/vuex-pinia'),
            'border-gray-300': !isActiveLink('/vuex-pinia')
          }"
        >
          <NuxtLink
            to="/vuex-pinia"
            class="block text-gray-700 hover:text-blue-600 py-1"
            :class="{
              'text-blue-600 font-semibold': isActiveLink('/vuex-pinia')
            }"
            >Vuex 與 Pinia</NuxtLink
          >
        </li>
        <li
          class="border-l-2 pl-4 transition-colors duration-200"
          :class="{
            'border-blue-500': isActiveLink('/nuxt-seo'), // 注意這裡的路由
            'border-gray-300': !isActiveLink('/nuxt-seo') // 假設這是 Nuxt 與 SEO 頁面
          }"
        >
          <NuxtLink
            to="/nuxt-seo"
            class="block text-gray-700 hover:text-blue-600 py-1"
            :class="{
              'text-blue-600 font-semibold': isActiveLink('/nuxt-seo')
            }"
            >SEO 與 Nuxt</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* 可選：NuxtLink 活躍時的預設樣式，但我們這裡用動態類別控制 */
.router-link-active {
  color: #2563eb;
  font-weight: 600;
  border-left-color: #3b82f6;
}
</style>
