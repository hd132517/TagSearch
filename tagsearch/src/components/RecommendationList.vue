<template>
  <div>
    <h2 class="text-xl font-semibold mb-2">관련 콘텐츠 추천</h2>
    <ul class="list-disc list-inside">
      <li v-for="item in items" :key="item" class="mb-2">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps<{ items: string[] }>()
</script>