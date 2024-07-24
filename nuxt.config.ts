export default defineNuxtConfig({
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', {injectPosition: 'first'}]
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
})