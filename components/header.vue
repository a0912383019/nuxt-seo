<script setup lang="ts"></script>
<template>
  <header class="bg-white w-full shadow-md fixed z-50">
    <div class="container mx-auto flex items-center justify-start p-4 relative">
      <!-- Mobile menu button -->
      <button @click="$emit('toggleSidebar')" class="block md:hidden text-gray-600 mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 26 26"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <!-- Logo -->
      <NuxtLink to="/">
        <img src="/fd-logo.png" alt="" class="releative left-0 w-12">
      </NuxtLink>
    </div>
  </header>
</template>
