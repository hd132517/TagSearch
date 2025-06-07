<template>
  <div class="mb-6">
    <h2 class="text-xl font-semibold mb-2">요약</h2>
    <p class="bg-white p-4 rounded shadow text-gray-800 dark:bg-gray-700 dark:text-white">
      {{ summary }}
    </p>
  </div>
</template>

<script setup>
defineProps<{ summary: string }>()
</script>