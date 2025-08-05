import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    allowComposition: true,
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
        en,
        de
    }
})

export default i18n