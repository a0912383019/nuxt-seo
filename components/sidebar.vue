<script setup lang="ts">
defineProps<{ isOpen: boolean }>()
defineEmits(['close'])
</script>
<template>
  <!-- 手機版 fixed sidebar -->
  <aside
    class="fixed top-0 left-0 w-4/5 max-w-[250px] h-full bg-white z-150 shadow-lg p-4 transition-transform duration-300 md:hidden"
    :class="{ '-translate-x-full': !isOpen }"
  >
    <!-- 關閉按鈕 -->
    <button
      @click="$emit('close')"
      class="absolute top-4 left-4 text-gray-600 z-100 block md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <!-- 選單內容 -->
    <SidebarContent></SidebarContent>
  </aside>
  <!-- 桌面版 -->
  <aside
    class="hidden md:block bg-gray-50 fixed top-[60px] left-0 w-72 h-[calc(100vh-60px)] overflow-y-auto shadow z-30"
  >
    <!-- 選單區塊 -->
    <div class="h-full p-4 relative">
      <!-- 選單內容 -->
      <SidebarContent></SidebarContent>
    </div>
  </aside>
</template>
