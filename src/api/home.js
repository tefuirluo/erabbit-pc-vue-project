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
