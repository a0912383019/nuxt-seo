<script setup lang="ts">
interface Crumb {
  label: string
  to: string
}

const props = defineProps<Crumb>()
</script>
<template>
  <nav class="flex items-center space-x-2 text-gray-500 text-sm" aria-label="Breadcrumb">
    <NuxtLink to="/" class="flex items-center hover:text-gray-700">
      <Icon name="uil:home" class="text-gray-500 text-xl" />
      <span class="sr-only">Home</span>
    </NuxtLink>

    <div class="flex items-center">
      <svg
        class="h-4 w-4 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <NuxtLink :to="props.to" class="ml-2 hover:text-gray-700">{{ props.label }}</NuxtLink>
    </div>
  </nav>
</template>
