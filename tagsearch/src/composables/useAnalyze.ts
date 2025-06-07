import { ref } from 'vue'
import { makePrompt } from '~/utils/promptTemplates'

export const useAnalyze = async (text: string) => {
  const loading = ref(true)
  const summary = ref('')
  const tags = ref<string[]>([])
  const recommendations = ref<string[]>([])

  try {
    const res = await $fetch('/api/analyze', {
      method: 'POST',
      body: { prompt: makePrompt(text) }
    })
    summary.value = res.summary
    tags.value = res.tags
    recommendations.value = res.recommendations
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }

  return { summary, tags, recommendations, loading }
}
