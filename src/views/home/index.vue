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
  </div>
</template>
<script>
import HomeCategory from '@/views/home/components/home-category'
import HomeBanner from '@/views/home/components/home-banner'
export default {
  name: 'PageHome',
  components: { HomeBanner, HomeCategory }
}
</script>
<style scoped lang="less">

</style>
