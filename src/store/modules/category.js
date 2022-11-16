// 存储的分类数据
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
// 分类模块
export default {
  namespaced: true,
  state: () => {
    return {
      // 分类信息集合, 依赖 topCategory 重新设置, 保证初始化就要数据, 不至于白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 修改分类函数
  mutations: {
    // payload 所有的分类集合
    setList (state, payload) {
      state.list = payload
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
      const { result } = await findAllCategory()
      // 获取数据成功，提交mutations进行数据修改
      commit('setList', result)
    }
  }
}
