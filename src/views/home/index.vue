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
    <home-panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>
      <!--面板内容-->
    </home-panel>
    <!--人气推荐-->
  </div>
</template>
<script>
import HomeCategory from '@/views/home/components/home-category'
import HomeBanner from '@/views/home/components/home-banner'
import HomePanel from '@/views/home/components/HomePanel'
import XtxMore from '@/components/library/xtx-more'

export default {
  name: 'PageHome',
  components: { XtxMore, HomeBanner, HomeCategory, HomePanel }
}
</script>
<style scoped lang="less">

</style>
