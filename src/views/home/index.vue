<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!--左侧分类-->
        <home-category />
        <!--轮播图-->
        <home-banner />
      </div>
    </div>
    <!--新鲜好物-->
    <home-new />
    <!--人气推荐-->
    <home-hot />
    <!--热门品牌-->
    <home-brand />
    <!--产品区块-->
    <home-product />
  </div>
</template>
<script>
import HomeCategory from '@/views/home/components/home-category'
import HomeBanner from '@/views/home/components/home-banner'
import homeNew from '@/views/home/components/home-new'
import HomeHot from '@/views/home/components/home-hot'
import HomeBrand from '@/views/home/components/home-brand'
import HomeProduct from '@/views/home/components/home-product'

export default {
  name: 'PageHome',
  components: { HomeHot, HomeBanner, HomeCategory, homeNew, HomeBrand, HomeProduct }
}
</script>
<style scoped lang="less">

</style>
