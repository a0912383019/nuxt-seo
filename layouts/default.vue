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
const router = useRouter()

const isSidebarOpen = ref(false)

onMounted(() => {
  // 添加 router.afterEach 守衛
  const unsubscribe = router.afterEach(() => {
    isSidebarOpen.value = false
  })

  // 在組件卸載時移除守衛，防止記憶體洩漏
  onUnmounted(() => {
    unsubscribe()
  })
})
</script>
