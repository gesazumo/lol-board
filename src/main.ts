import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import '@/assets/css/common.css'
import constant from './constant'

loadFonts()

const app = createApp(App)

Object.keys(constant).forEach(key => {
	app.config.globalProperties[key] = constant[key]
})

app.use(router).use(store).use(vuetify).mount('#app')
