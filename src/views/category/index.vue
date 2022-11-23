<template>
  <div class="top-category">
    <div class="container">
      <!--面包屑-->
      <XtxBread>
        <XtxBreadItem :to="{path:'/'}">首页</XtxBreadItem>
        <XtxBreadItem :to="{path:'/category/1005001'}">电器</XtxBreadItem>
        <XtxBreadItem>空调</XtxBreadItem>
      </XtxBread>
      <!--轮播图-->
      <!--全部分类-->
      <!--各个分类推荐商品-->
    </div>
  </div>
</template>

<script>
import XtxBread from '@/components/library/xtx-bread'
import XtxBreadItem from '@/components/library/xtx-bread-item'

export default {
  name: 'TopCategory',
  components: { XtxBreadItem, XtxBread }
}
</script>

<style scoped lang="less">

</style>
