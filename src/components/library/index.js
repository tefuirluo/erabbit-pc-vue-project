// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
import defaultImg from '@/assets/images/200.png'
// 批量导入
const importFn = require.context('./', false, /\.vue$/)
export default {
  install (app) {
    // 批量注册全局组件
    importFn.keys().forEach(key => {
      // 导入组件
      const component = importFn(key).default
      // 注册组件
      app.component(component.name, component)
    })
    // 定义指令
    defineDirective(app)
  }
}
// 定义指令
const defineDirective = (app) => {
  // 1. 图片懒加载指令
  // 原理:先存储图片不能在 src 上, 当图片进入可视区, 将你存储图片地址设置给图片元素即可
  app.directive('lazy', {
    mounted (el, binging) {
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          // 把指令的值设置给 el 的 src 属性 -> binging.value 就是指令的值
          // 处理图片加载失败
          el.onerror = () => {
            el.src = defaultImg
          }
          el.src = binging.value
        }
      }, {
        threshold: 0
      })
      // 开启观察
      observe.observe(el)
    }
  })
}
