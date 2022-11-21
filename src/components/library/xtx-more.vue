<template>
  <RouterLink to="path" class="xtx-more">
    <span>查看全部</span>
    <i class="iconfont icon-angle-right"></i>
  </RouterLink>
</template>

<script>
export default {
  name: 'xtx-more',
  props: {
    path: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="less">
.xtx-more {
  margin-top: 2px;
  span {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 4px;
    color: #999999;
  }
  i {
    font-sise: 14px;
    vertical-align: middle;
    position: relative;
    top: 2px;
    color: #cccccc;
  }
  &:hover {
    span, i {
      color: @xtxColor;
    }
  }
}
</style>
