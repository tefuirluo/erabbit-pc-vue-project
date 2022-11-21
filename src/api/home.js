import request from '@/utils/request'

/**
 * 获取品牌
 * @param { Integer } limit 品牌个数
 * @returns { Promise }
 */
export const findBrand = (limit = 6) => {
  return request(
    '/home/brand', 'GET', { limit }
  )
}

/**
 * 获取广告图
 * @returns { Promise }
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物
 * @returns {Promise}
 */
export const findNew = () => {
  return request(
    '/home/new', 'get'
  )
}
