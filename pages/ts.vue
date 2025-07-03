<script setup lang="ts">
useSeoMeta({
  title: 'TypeScript 泛型與條件型別｜前端學習筆記',
  description:
    '深入學習 TypeScript 泛型（Generics）與條件型別（Conditional Types）的應用，透過範例掌握型別約束、工具型別與 infer 推斷，提升程式碼彈性與型別安全性。',
  ogTitle: 'TypeScript 泛型與條件型別應用',
  ogDescription:
    '掌握 TypeScript Generics 和 Conditional Types，包含泛型函式、型別約束、Partial、Pick、Omit、Record 等工具型別，並了解 infer 關鍵字在型別推斷的妙用。',
  ogImage: 'https://vuefdseo.com/og-html-semantic.png',
  ogUrl: 'https://vuefdseo.com/ts',
  twitterCard: 'summary_large_image',
  twitterTitle: 'TypeScript 泛型與條件型別：深度解析',
  twitterDescription:
    '一份全面的 TypeScript 泛型和條件型別指南，從基本語法到進階工具型別（Partial, Pick, Omit, Record）和 infer 關鍵字，助你寫出更強健的 TypeScript 程式碼。',
  twitterImage: 'https://vuefdseo.com/og-html-semantic.png',
  keywords:
    'TypeScript, 泛型, Generics, 條件型別, Conditional Types, infer, 型別推斷, extends, keyof, Partial, Pick, Omit, Record, Required, Readonly, TS 工具型別, JavaScript 型別安全'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <Breadcrumbs to="/ts" label="TypeScript 的泛型與條件型別應用" />

    <section class="mb-12 mt-5">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        TypeScript 泛型與條件型別
      </h1>
      <p class="text-sm text-slate-500 mb-6">2025年7月2日</p>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>使用 <code>&lt;T&gt;</code> 建立可重複使用的函式與型別</li>
        <li>配合 <code>extends</code> 限定型別範圍</li>
        <li>
          內建工具型別如 <code>Partial</code>、<code>Pick</code>、<code>Record</code> 非常實用
        </li>
        <li>條件型別讓你能根據邏輯自動推斷型別</li>
      </ul>
    </section>

    <section class="mb-12">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">範例：泛型函式</h3>
      <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto"><code class="language-ts">
function identity&lt;T&gt;(value: T): T {
  return value;
}

const result = identity&lt;number&gt;(123);
  </code></pre>
    </section>

    <section class="mb-12">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">範例：泛型約束與 keyof</h3>
      <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto"><code class="language-ts">
function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Tom", age: 30 };
const userName = getProperty(user, "name");
  </code></pre>
    </section>

    <section class="mb-12">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">常見工具型別</h3>
      <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto">
<code class="language-ts">
type User = {
  id: number;
  name: string;
  age?: number;
};

type UserPartial = <span class="text-blue-600">Partial</span>&lt;User&gt;;   // 所有屬性都可選
type UserRequired = <span class="text-blue-600">Required</span>&lt;User&gt;; // 所有屬性皆為必填
type UserReadonly = <span class="text-blue-600">Readonly</span>&lt;User&gt;; // 所有屬性不可改動
type NameOnly = <span class="text-blue-600">Pick</span>&lt;User, "name"&gt;; // 只包含 name 屬性
type WithoutAge = <span class="text-blue-600">Omit</span>&lt;User, "age"&gt;; // 排除 age 屬性
type UserRecord = <span class="text-blue-600">Record</span>&lt;"a" | "b", string&gt;; // { a: string; b: string }
</code>
</pre>
    </section>

    <section class="mb-12">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">條件型別與 infer 推斷</h3>
      <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto"><code class="language-ts">
type GetReturnType&lt;T&gt; = T extends (...args: any[]) =&gt; infer R ? R : never;

type Foo = () =&gt; number;
type Bar = GetReturnType&lt;Foo&gt;; // number
  </code></pre>
    </section>

    <section class="mb-12">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">新手常見錯誤與觀念混淆</h3>
      <ul class="text-sm md:text-base list-disc ml-6 text-gray-700 space-y-2">
        <li>混用 <code>any</code> 導致型別保護失效</li>
        <li>誤以為泛型一定要寫成 <code>&lt;T&gt;</code>，其實可以是任何有意義的名稱</li>
        <li>誤用 <code>keyof</code> 與 <code>in</code> 導致推斷錯誤</li>
        <li>不知道 <code>infer</code> 僅能在條件型別內部使用</li>
        <li>不熟工具型別的限制，導致誤用（如 Pick 時選不存在的鍵）</li>
      </ul>
    </section>

    <p class="mt-6 text-sm text-gray-600">
      想知道 Vue3 的生命週期嗎？參考：
      <NuxtLink to="/vue-lifecycle" class="text-blue-500 hover:underline">Vue3 生命週期</NuxtLink>
    </p>
  </div>
</template>
