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
export default {
  name: 'LayoutPage',
  components: { AppFooter, AppHeader, AppNavbar }
}
</script>

<style scoped>
.app-body {
  min-height: 600px;
}
</style>
