import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 挂载 store && router 到 app
createApp(App).use(store).use(router).mount('#app')
