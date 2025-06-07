import { OpenAI } from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const prompt = body.prompt

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  })

  const raw = response.choices[0].message.content || '{}'
  const parsed = JSON.parse(raw)

  return parsed
})
