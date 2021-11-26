import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import '@/assets/css/common.css'
import constant from './constant'
import utils from './util'

import CommonError from '@/components/error/CommonError.vue'

loadFonts()

export const app = createApp(App)

Object.keys(constant).forEach(key => {
	app.config.globalProperties[key] = constant[key]
})

Object.keys(utils).forEach(key => {
	app.config.globalProperties[key] = utils[key]
})

app.component('error-comp', CommonError)

app.use(router).use(store).use(vuetify).mount('#app')
