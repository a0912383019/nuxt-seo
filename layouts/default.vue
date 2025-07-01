<template>
  <Header @toggleSidebar="isSidebarOpen = !isSidebarOpen"></Header>
  <!-- 手機遮罩 -->
  <div
    v-show="isSidebarOpen"
    class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
    @click="isSidebarOpen = false"
  ></div>
  <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />
  <div class="pt-[60px] md:ml-72 transition-all">
    <main class="min-h-screen">
      <slot></slot>
    </main>
  </div>
  <Footer></Footer>
</template>
<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false)
</script>
