<template>
  <div class="container">
    <div class="mine-sidebar">
      <div></div>
      <ul>
        <li v-for="item in pathArrReactive" :key="item.path">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="mine-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

function UseMineRouteEffect() {
  const pathArrReactive = reactive([
    { path: 'order', name: '我的订单' },
    { path: 'course', name: '我的订单' },
    { path: 'invoice', name: '我的订单' },
    { path: 'primision', name: '我的订单' },
    { path: 'cart', name: '购物车' },
    { path: 'address', name: '我的地址' },
    { path: 'about', name: '我的订单' },
  ]);

  return { pathArrReactive };
}

export default {
  name: 'Mine',
  setup() {
    const { pathArrReactive } = UseMineRouteEffect();
    return { pathArrReactive };
  },
};
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.container {
  @include flex-row;
  margin: auto;
  height: 100%;
  width: 1400px;
}
.mine-sidebar {
  margin-right: 20px;
  width: 200px;
  border: 1px solid $header-bg;
}
.mine-view {
  @include flex-1;
  overflow-y: auto;
}
</style>