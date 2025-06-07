export const makePrompt = (text: string) => `
다음 글을 분석해줘:

"""
${text}
"""

1. 간결한 요약 (1-2문장)
2. 핵심 키워드 또는 태그 (최대 10개, 쉼표 구분)
3. 유사 주제 콘텐츠 예시 (제목 + 한 줄 설명 3개)

응답은 다음 JSON 형식으로 줘:
{
  "summary": "...",
  "tags": ["...", "..."],
  "recommendations": ["제목1 - 설명1", "제목2 - 설명2"]
}