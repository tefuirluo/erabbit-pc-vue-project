import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入自己的 UI 组件库
import ui from './components/library'

// 重置样式的库
import 'normalize.css'
// 自己项目的重置样式和公用样式
import '@/assets/styles/common.less'

// 挂载 store && router 到 app
// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).use(router).use(ui).mount('#app')
