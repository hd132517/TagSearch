<template>
  <div class="w-full max-w-xl">
    <textarea
      v-model="text"
      rows="6"
      class="w-full p-4 border rounded shadow focus:outline-none"
      placeholder="텍스트를 입력하거나 붙여넣으세요..."
    ></textarea>
    <button @click="submit" class="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      분석하기
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['analyze'])
const text = ref('')
const submit = () => {
  if (text.value.trim()) emit('analyze', text.value)
}
</script>