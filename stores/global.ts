// stores/counter.ts
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('counter', () => {
  const sidebarOpen = ref(true)
//   const increment = () => count.value++

  return { sidebarOpen }
})
