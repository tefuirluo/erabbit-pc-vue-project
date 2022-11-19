<template>
  <div class="home-banner">
    <XtxCarousel />
  </div>
</template>

<script>
import XtxCarousel from '@/components/library/xtx-carousel'
export default {
  name: 'home-banner',
  components: { XtxCarousel }
}
</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}
.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
