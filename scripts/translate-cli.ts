import { updateREADMEs } from './readme'
import { translateAllQuizzes } from './translate'
import { defaultLocale } from './locales'

async function run() {
  await translateAllQuizzes(defaultLocale, 'zh-CN')
  await translateAllQuizzes(defaultLocale, 'ja')
  await translateAllQuizzes(defaultLocale, 'pt-BR')
  await translateAllQuizzes(defaultLocale, 'ru')
  await updateREADMEs()
}

run()
