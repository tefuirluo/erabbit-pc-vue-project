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
  </div>
</template>
<script>
import HomeCategory from '@/views/home/components/home-category'
import HomeBanner from '@/views/home/components/home-banner'
import homeNew from '@/views/home/components/home-new'

export default {
  name: 'PageHome',
  components: { HomeBanner, HomeCategory, homeNew }
}
</script>
<style scoped lang="less">

</style>
