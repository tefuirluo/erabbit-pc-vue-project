<template>
  <div class="home-new">
    <home-panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><XtxMore path="/"/></template>
      <!--面板内容-->
      <div ref="target" style="position: relative;height: 406px;">
        <Transition name="fade">
          <ul v-if="goods.length" ref="pannel" class="goods-list">
            <li v-for="item in goods" :key="item.id">
                  <RouterLink to="`/product/${item.id}`">
                    <img :src="item.picture" alt="">
                    <p class="name ellipsis">{{item.name}}</p>
                    <p class="price">{{item.price}}</p>
                  </RouterLink>
                </li>
          </ul>
          <HomeSkeleton bg="#f0f9f4" v-else />
        </Transition>
      </div>
    </home-panel>
  </div>
</template>

<script>
import HomePanel from '@/views/home/components/HomePanel'
import XtxMore from '@/components/library/xtx-more'
import HomeSkeleton from '@/views/home/components/home-skeleton'
import { ref } from 'vue'
import { findNew } from '@/api/home'
import { useLazyData } from '@/hooks'

export default {
  name: 'home-new',
  components: { XtxMore, HomePanel, HomeSkeleton },
  setup () {
    // const goods = ref([])
    // findNew().then(data => {
    //   goods.value = data.result
    // })
    const target = ref(null)
    const result = useLazyData(target, findNew)
    return { goods: result, target }
  }
}
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
