<template>
  <!--顶部通栏-->
  <AppNavbar />
  <!--头部组件-->
  <AppHeader />
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
export default {
  name: 'LayoutPage',
  components: { AppFooter, AppHeader, AppNavbar },
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
