import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/course',
    name: 'Course',
    component: () => import(/* webpackChunkName: "about" */ '../views/Course.vue'),
  }, {
    path: '/mine',
    name: 'Mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine/Index.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
