<template>
  <div class="mine-sidebar">
    <mine-info></mine-info>
    <ul>
      <li class="sidebar-item" v-for="item in pathArrReactive" :key="item.path" @click="handleRoute(item.path)">
        <a href="javascript:;">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import router from '../../../router';

import MineInfo from './MineInfo.vue';
function UseMineRouteEffect() {
  const routeRef = ref('cart');

  const pathArrReactive = reactive([
    { path: 'cart', name: '我的购物车' },
    { path: 'order', name: '我的订单' },
    { path: 'course', name: '我的课程' },
    { path: 'invoice', name: '我的发票' },
    { path: 'primision', name: '我的证书' },
    { path: 'address', name: '我的地址' },
  ]);

  const handleRoute = function (path) {
    pathArrReactive.some((item) => {
      if (item.path === path) {
        routeRef.value = item.name;
      }
    });
    console.log('routeRef.value', routeRef.value);
    router.push(`/mine/${path}`);
  };

  return { pathArrReactive, handleRoute, routeRef };
}

export default {
  name: 'MineSideBar',
  components: { MineInfo },
  setup() {
    const { pathArrReactive, handleRoute, routeRef } = UseMineRouteEffect();
    return { pathArrReactive, handleRoute, routeRef };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../style/variables.scss';
.mine-sidebar {
  margin-right: 20px;
  width: 200px;
  height: 100%;
  border: 1px solid $header-bg;
}
.sidebar-item {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 0 15px;
  }
}
</style>