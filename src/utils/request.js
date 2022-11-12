// 创建一个新的 axios 实例
// 请求拦截器, 如果有 token 进行头部携带
// 响应拦截器
// => 剥离无效数据
// => 处理 token 失效
// 导出一个函数, 调用当前的 axios 实例发请求 -> 返回值promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准机制, 原因: 其他地方不是通过 axios 发请求的地方用上基准地址
// 接口地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
const instance = axios.create({
  // axios 配置 -> baseURL timeout
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // 拦截的业务逻辑
  // 进行请求配置的修改
  // 如果本地有 token 就在头部携带
  // 1. 获取用户信息对象
  const { profile } = store.state.user
  // 2. 判断是否有 token
  if (profile.token) {
    // 3. 设置 token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// res => res.data 取出 data 数据, 以后调接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.status === 401) {
    // 1. 清空无效信息
    // 2. 跳转到登录页面
    // 3. 跳转需要传参 => 当前路由地址 -> 给登录页码
    store.commit('user/setUser', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    // encodeURIComponent 转换 uri 编码, 防止解析地址出问题
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求 -> 请求地址, 请求方式, 提交的数据
  return instance({
    url,
    method,
    // get -> params(传递)
    // !get -> data(传递)
    // [] 设置一个动态的 key, 写 JS 表达式, JS 表达式的执行结果当做 KEY
    // method -> get/Get/GET => 转换为小写再去判断
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
