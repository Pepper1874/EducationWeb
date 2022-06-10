<template>
  <nav class="header-nav">
    <div class="nav-title">北勘协培训中心</div>
    <header-menu />
  </nav>
</template>

<script>
import HeaderMenu from './Child/Menu.vue';
export default {
  name: 'HeaderIndex',
  components: {
    HeaderMenu,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.header-nav {
  @include flex-row;
  padding: 0 15px;
  font-size: 18px;
  background: $header-bg;
  color: $header-color;
}

.nav-title {
  margin: 0 30px 0 0;
}
</style>
