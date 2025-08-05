import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
        en,
        de
    },
    globalInjection: true,
    allowComposition: true
})

export default i18n