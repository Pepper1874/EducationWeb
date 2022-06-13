<template>
  <div class="container">
    <mine-side-bar></mine-side-bar>
    <div class="mine-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MineSideBar from './Child/SideBar.vue';
export default {
  name: 'Mine',
  components: { MineSideBar },
  setup() {
    // const { pathArrReactive } = UseMineRouteEffect();
    return {};
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
.mine-view {
  @include flex-1;
  overflow-y: auto;
}
</style>