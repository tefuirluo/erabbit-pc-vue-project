import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from '@/store/modules/cart'
import user from '@/store/modules/user'
import category from '@/store/modules/category'

export default createStore({

  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    createPersistedState({
      // 本地存储名字
      key: 'erabbit-pc-vue-project',
      // 指定需要存储的模块
      paths: ['user', 'cate']
    })
  ]
})
