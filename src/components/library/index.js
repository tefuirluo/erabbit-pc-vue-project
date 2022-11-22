// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

import XtxSkeleton from '@/components/library/xtx-skeleton'
import XtxCarousel from '@/components/library/xtx-carousel'
import XtxMore from '@/components/library/xtx-more'
import defaultImg from '@/assets/images/200.png'

export default {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
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
