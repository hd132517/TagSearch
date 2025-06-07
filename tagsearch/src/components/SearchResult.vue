<template>
    <div class="result-box">
        <div v-if="loading" class="loading">불러오는 중...</div>
        <div v-else-if="result" class="result">{{ result }}</div>
        <div v-else class="placeholder">검색어를 입력하면 관련 태그를 GPT가 분석해줍니다.</div>
    </div>
</template>

<script>
export default {
    name: "SearchResult",
    props: {
        result: String,
        loading: Boolean
    }
};
</script>

<style scoped>
.result-box {
    border-top: 1px solid #ddd;
    padding-top: 1.5rem;
    min-height: 100px;
}

.loading {
    font-style: italic;
    color: #888;
}

.result {
    white-space: pre-wrap;
    font-size: 1.1rem;
    color: #222;
}

.placeholder {
    color: #aaa;
    font-style: italic;
}
</style>
