<template>
  <div class="p-4 max-w-3xl mx-auto">
    <ResultSummary :summary="summary" v-if="summary" />
    <TagList :tags="tags" v-if="tags.length" />
    <RecommendationList :items="recommendations" v-if="recommendations.length" />
    <LoadingSpinner v-if="loading" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAnalyze } from '~/composables/useAnalyze'

const route = useRoute()
const query = route.query.q as string

const { summary, tags, recommendations, loading } = await useAnalyze(query)
</script>
