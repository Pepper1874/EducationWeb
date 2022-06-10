
<script>
import HeaderIndex from './components/Header/Index.vue';

export default {
  name: 'App',
  components: {
    HeaderIndex,
  },
};
</script>

<template>
  <header-index></header-index>
  <main class="app-view">
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.app-view {
  flex: 1;
  padding: 15px 0;
}
</style>
