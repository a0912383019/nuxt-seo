<script setup lang="ts">
useSeoMeta({
  // 頁面標題：精確描述頁面內容，包含主關鍵字，結尾可帶網站名。建議不超過 60-70 字元。
  title: 'ES6+ 語法與 JavaScript 設計模式 | 前端學習資源地圖',

  // 頁面描述：簡潔說明頁面內容，包含關鍵字，吸引使用者點擊。建議 120-158 字元。
  description:
    '深入學習 ES6+ 現代 JavaScript 語法（let, const, 箭頭函式, 模板字串）與常見設計模式（單例、工廠、觀察者），強化你的 JavaScript 開發能力與程式碼品質。',

  // Open Graph 標題：用於社群分享時顯示的標題 (通常比 title 短，更具號召力)
  ogTitle: 'ES6+ 語法與 JavaScript 設計模式全攻略',
  // Open Graph 描述：用於社群分享時顯示的描述 (通常比 description 短，更精煉)
  ogDescription:
    '快速掌握 ES6+ 的核心特性與優勢，並透過實例學習單例、工廠、觀察者模式，打造更優雅、可維護的 JavaScript 程式碼。',
  // Open Graph 圖片：社群分享時顯示的預覽圖，請確保圖片存在且路徑正確且為絕對路徑。推薦 1.91:1 比例，例如 1200x630px。
  ogImage: 'https://your-site.com/images/og-js-es6.png', // **重要：請替換為你的圖片的絕對路徑**
  // Open Graph URL：社群分享時此頁面的標準 URL。
  ogUrl: 'https://your-site.com/js-es6', // **重要：替換成你網站這個頁面的實際 URL**

  // Twitter Card 類型：推薦 'summary_large_image'，顯示大圖預覽。
  twitterCard: 'summary_large_image',
  // Twitter 標題：Twitter 專屬標題，可與 ogTitle 相同或微調。
  twitterTitle: 'ES6+ 語法與 JS 設計模式：一次搞懂現代 JavaScript',
  // Twitter 描述：Twitter 專屬描述，可與 ogDescription 相同或微調。
  twitterDescription:
    '從 let/const 到箭頭函式，再到常見的設計模式，全面提升你的 JavaScript 編碼技巧與程式碼組織能力。',
  // Twitter 圖片：同 ogImage。
  twitterImage: 'https://your-site.com/images/og-js-es6.png', // **同上，替換為你的圖片的絕對路徑**

  // 關鍵字：幫助搜尋引擎理解頁面主題，但不直接影響排名，應自然包含於內容中。
  keywords:
    'ES6, JavaScript 語法, JS 設計模式, let, const, var, 箭頭函式, Arrow Function, 模板字串, Template Literals, 單例模式, Singleton Pattern, 工廠模式, Factory Pattern, 觀察者模式, Observer Pattern, Hoisting, 變數提升, TDZ, 暫時性死區, JavaScript 學習'
})
</script>
<template>
  <div class="container mx-auto px-8 py-8 max-w-3xl">
    <Breadcrumbs to="/js-es6" label="ES6+ 語法與設計模式" />
    <section class="mb-12 mt-5">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        ES6+ 語法與設計模式
      </h1>
      <p class="text-sm text-slate-500">2025年7月1日</p>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">ES5 vs ES6+</h2>
      <div class="w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 30%"
              >
                語法項目
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                ES5
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                style="width: 35%"
              >
                ES6+
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">變數宣告</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700"><code>var</code></td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>let</code>, <code>const</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">函式定義</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>function () {}</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>() => {}</code>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">字串拼接</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>'Hi ' + name</code>
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-700">
                <code>`Hi ${name}`</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">var / let / const 比較</h2>
      <div class="mb-6 w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-100 text-gray-600">
            <tr>
              <th class="p-3 text-left">項目</th>
              <th class="p-3 text-left">var</th>
              <th class="p-3 text-left">let</th>
              <th class="p-3 text-left">const</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="p-3">作用域</td>
              <td class="p-3">函式作用域</td>
              <td class="p-3">區塊作用域</td>
              <td class="p-3">區塊作用域</td>
            </tr>
            <tr>
              <td class="p-3">可重新指定值</td>
              <td class="p-3">✔</td>
              <td class="p-3">✔</td>
              <td class="p-3">✘（但可改物件內容）</td>
            </tr>
            <tr>
              <td class="p-3">可重複宣告</td>
              <td class="p-3">✔</td>
              <td class="p-3">✘</td>
              <td class="p-3">✘</td>
            </tr>
            <tr>
              <td class="p-3">變數提升</td>
              <td class="p-3">✔（初始為 undefined）</td>
              <td class="p-3">✘（TDZ）</td>
              <td class="p-3">✘（TDZ）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <span
        >tdz 是指在變數宣告之前，變數不能被存取的區域。 如果嘗試在 tdz 範圍內存取變量，會拋出
        ReferenceError 錯誤。</span
      >
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        為什麼不要用 <code class="text-red-600">var</code>？
      </h2>

      <h3 class="text-xl font-semibold text-gray-800 mb-3">1. 沒有區塊作用域（block scope）</h3>
      <p class="text-sm text-gray-700 mb-2">
        使用 <code>var</code> 宣告的變數不會限制在區塊範圍內，容易造成變數污染：
      </p>
      <pre class="bg-gray-100 rounded p-3 text-sm overflow-auto"><code>if (true) {
  var name = "Lan";
}
console.log(name); // "Lan"</code></pre>

      <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">2. 存在「變數提升」（Hoisting）</h3>
      <p class="text-sm text-gray-700 mb-2">
        變數會被提升至作用域頂端，但不包含賦值，容易誤會為可用：
      </p>
      <pre
        class="bg-gray-100 rounded p-3 text-sm overflow-auto"
      ><code>console.log(score); // undefined
var score = 100;</code></pre>

      <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 flex">
        <Icon name="fe:check" class="text-green-500 text-3xl" />
        改用&nbsp<code>let</code> &nbsp/&nbsp <code>const</code>&nbsp的好處
      </h3>
      <div class="mb-6 w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 text-gray-600 font-semibold">
            <tr>
              <th class="px-4 py-2">關鍵字</th>
              <th class="px-4 py-2">特性</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-2 font-medium">let</td>
              <td class="px-4 py-2">有區塊作用域、無提升、可重新賦值</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">const</td>
              <td class="px-4 py-2">有區塊作用域、無提升、不可重新賦值（適合常數）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre class="bg-gray-100 rounded p-3 text-sm overflow-auto"><code>if (true) {
  let username = "Lan";
  const age = 25;
}

console.log(username); // ReferenceError</code></pre>

      <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">
        補充：那為什麼有時還是看到 <code>var</code>？
      </h3>
      <ul class="list-disc ml-6 text-sm text-gray-700 space-y-1">
        <li>出現在舊教學或歷史專案中</li>
        <li>舊瀏覽器或不支援 ES6 的執行環境</li>
        <li>開發者個人習慣（不建議）</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">實戰建議</h3>
      <div class="mb-6 w-full overflow-x-auto bg-white rounded-lg shadow-sm sm:rounded-lg">
        <table class="min-w-[640px] w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 text-gray-600 font-semibold">
            <tr>
              <th class="px-4 py-2">使用情境</th>
              <th class="px-4 py-2">建議關鍵字</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-2">可變資料</td>
              <td class="px-4 py-2 font-medium">let</td>
            </tr>
            <tr>
              <td class="px-4 py-2">常數（不可變）</td>
              <td class="px-4 py-2 font-medium">const</td>
            </tr>
            <tr>
              <td class="px-4 py-2">任何情況</td>
              <td class="px-4 py-2 font-medium">不要用 var</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">常見設計模式範例</h2>
      <h3 class="text-lg font-semibold mb-2 flex">
        <Icon name="fe:check" class="text-green-500 text-3xl" />&nbsp單例模式（Singleton Pattern）
      </h3>
      <pre
        class="bg-gray-100 p-4 rounded text-sm overflow-x-auto text-gray-800"
      ><code>class Singleton {
  static instance: Singleton
  private constructor() {}

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

const a = Singleton.getInstance()
const b = Singleton.getInstance()
console.log(a === b) // true</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6 flex">
        <Icon name="fe:check" class="text-green-500 text-3xl" />&nbsp工廠模式（Factory Pattern）
      </h3>
      <pre
        class="bg-gray-100 p-4 rounded text-sm overflow-x-auto text-gray-800"
      ><code>function createUser(type: string) {
  if (type === 'admin') return { role: 'admin', permission: 'all' }
  return { role: 'user', permission: 'read' }
}

const admin = createUser('admin')
const user = createUser('user')</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6 flex">
        <Icon name="fe:check" class="text-green-500 text-3xl" />&nbsp觀察者模式（Observer Pattern）
      </h3>
      <pre
        class="bg-gray-100 p-4 rounded text-sm overflow-x-auto text-gray-800"
      ><code>class Subject {
  observers: Function[] = []

  subscribe(fn: Function) {
    this.observers.push(fn)
  }

  notify(data: any) {
    this.observers.forEach(fn => fn(data))
  }
}

const subject = new Subject()
subject.subscribe(data => console.log('Received:', data))
subject.notify('Hello')</code></pre>
    </section>

    <p class="mt-6 text-sm text-gray-600">
      Javascript 進階？參考：
      <NuxtLink to="/ts" class="text-blue-500 hover:underline"
        >TypeScript 的泛型與條件型別應用</NuxtLink
      >
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
