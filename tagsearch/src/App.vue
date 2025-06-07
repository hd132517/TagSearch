<template>
  <div id="app" class="container">
    <header>
      <h1>🔍 GPT 태그 검색기</h1>
    </header>

    <SearchBar @search="handleSearch" />

    <SearchResult :loading="loading" :result="result" />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import SearchResult from './components/SearchResult.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResult
  },
  data() {
    return {
      result: '',
      loading: false
    };
  },
  methods: {
    async handleSearch(query) {
      this.result = '';
      this.loading = true;

      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are a helpful assistant that finds relevant tags.' },
              { role: 'user', content: `다음 검색어를 설명하는 태그를 알려줘: ${query}` }
            ]
          })
        });

        const data = await res.json();
        this.result = data.choices?.[0]?.message?.content ?? '결과를 불러오지 못했습니다.';
      } catch (err) {
        this.result = '오류가 발생했습니다.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: #333;
}
</style>
