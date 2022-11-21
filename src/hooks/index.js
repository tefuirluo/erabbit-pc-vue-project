// 提供复用逻辑的函数 钩子
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

/**
 * 数据懒加载函数
 * @param { Element } target - DOM 对象
 * @param { Function } apiFn - API 函数
 */
export const useLazyData = (target, apiFn) => {
  const result = ref([])
  // stop 停止观察
  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        // 调用 API 函数获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    }
  )
  return result
}
