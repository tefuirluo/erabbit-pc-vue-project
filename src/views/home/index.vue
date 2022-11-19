<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!--左侧分类-->
        <home-category />
        <!--轮播图-->
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from '@/views/home/components/home-category'
export default {
  name: 'PageHome',
  components: { HomeCategory }
}
</script>
<style scoped lang="less">

</style>
