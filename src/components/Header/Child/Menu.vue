<template>
  <div class="header-menu">
    <a href="javascript:;" class="menu-item" v-for="item in routeObjReactive" :key="item.name" :class="{ active: routeRef === item.name }" @click="handleRoute(item.path)">{{ item.name }}</a>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import router from '../../../router';

function UseRouterEffect() {
  const routeRef = ref('首页');
  const routeObjReactive = reactive([
    {
      path: '',
      name: '首页',
    },
    {
      path: 'course',
      // path: 'course/adult',
      name: '继续教育',
    },
    {
      path: 'course',
      // path: 'course/offline',
      name: '面授课程',
    },
    {
      path: 'course',
      // path: 'course/other',
      name: '其他课程',
    },
    {
      path: 'mine',
      name: '我的',
    },
  ]);

  const handleRoute = function (path) {
    routeObjReactive.some((item) => {
      if (item.path === path) {
        routeRef.value = item.name;
      }
    });
    console.log('routeRef.value', routeRef.value);
    router.push(`/${path}`);
  };
  return { routeRef, routeObjReactive, handleRoute };
}

export default {
  name: 'HeaderMenu',
  setup() {
    const { routeRef, routeObjReactive, handleRoute } = UseRouterEffect();
    return { routeRef, routeObjReactive, handleRoute };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../style/mixins.scss';
@import '../../../style/variables.scss';

.header-menu {
  @include flex-row;
  height: 52px;
  line-height: 52px;
  background: $header-bg;
  color: $header-color;
}

.menu-item {
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  color: $header-color;
}

.active {
  background: $header-bg-active;
  color: $header-color-active;
}
</style>
