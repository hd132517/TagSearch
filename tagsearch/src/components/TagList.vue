<template>
  <div class="mb-6">
    <h2 class="text-xl font-semibold mb-2">태그</h2>
    <div class="flex flex-wrap gap-2">
      <span v-for="tag in tags" :key="tag" class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps<{ tags: string[] }>()
</script>