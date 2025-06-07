<template>
    <div class="search-bar">
        <input
            v-model="query"
            @keyup.enter="onSearch"
            type="text"
            placeholder="검색어를 입력하세요..."
        />
        <button @click="onSearch">검색</button>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            query: ''
        };
    },
    methods: {
        onSearch() {
            if (this.query.trim()) {
                this.$emit('search', this.query.trim());
            }
        }
    }
};
</script>

<style scoped>
.search-bar {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>