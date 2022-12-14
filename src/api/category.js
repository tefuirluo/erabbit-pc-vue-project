// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取所有分类（顶级 + 二级 + 对应商品）
 * @returns { promise }
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 * 获取顶级类目信息
 * @param { String } id - 顶级类目 ID
 * @returns { Promise }
 */
export const findTopCategory = (id) => {
  return request(
    '/category', 'get', { id }
  )
}

/**
 * 获取顶二级类目信息
 * @param { String } id - 顶级类目 ID
 * @returns {*}
 */
export const findSubCategoryFilter = (id) => {
  return request(
    '/category/sub/filter', 'get', { id }
  )
}
