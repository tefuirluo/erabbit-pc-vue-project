<template>
  <!--顶部通栏-->
  <app-navbar />
  <!--头部组件-->
  <app-header />
  <!--吸顶头部-->
  <app-header-sticky />
  <!--内容容器-->
  <div class="app-body">
    <!--二级路由-->
    <RouterView />
  </div>
  <!--底部组件-->
  <app-footer />
</template>

<script>
import AppNavbar from '@/components/app-navbar'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
import AppHeaderSticky from '@/components/app-header-sticky'
export default {
  name: 'LayoutPage',
  components: { AppHeaderSticky, AppFooter, AppHeader, AppNavbar },
  // 获取下分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped>
.app-body {
  min-height: 600px;
}
</style>
