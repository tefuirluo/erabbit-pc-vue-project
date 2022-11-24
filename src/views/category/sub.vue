<template>
  <div class="container">
    <!--面包屑-->
    <SubBread />
    <!--筛选区-->
    <SubFilter />
  </div>
</template>

<script>
import SubBread from '@/views/category/components/sub-bread'
import SubFilter from '@/views/category/sub-filter'

export default {
  name: 'SubCategory',
  components: { SubFilter, SubBread }

}
</script>

<style scoped lang="less">

</style>
