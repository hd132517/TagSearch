<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
    <h1 class="text-3xl font-bold mb-4 text-center">AI 태그 검색</h1>
    <InputBox @analyze="onAnalyze" />
  </div>
</template>

<script setup>
import InputBox from '~/components/InputBox.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const onAnalyze = (text: string) => {
  router.push(`/analyze?q=${encodeURIComponent(text)}`)
}
</script>