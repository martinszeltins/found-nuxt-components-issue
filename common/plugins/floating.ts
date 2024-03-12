import 'floating-vue/dist/style.css'
import FloatingVue from 'floating-vue'

export default defineNuxtPlugin({
    name: 'floating',
    parallel: true,
    setup(nuxtApp) {
        nuxtApp.vueApp.use(FloatingVue)
    },
})
