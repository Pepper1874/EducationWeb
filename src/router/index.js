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
    redirect: '/mine/cart',
    // { path: 'cart', name: '我的购物车' },
    // { path: 'order', name: '我的订单' },
    // { path: 'course', name: '我的课程' },
    // { path: 'invoice', name: '我的发票' },
    // { path: 'primision', name: '我的证书' },
    // { path: 'address', name: '我的地址' },
    children: [
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/Mine/Child/MineCart.vue'),
      }, {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Mine/Child/MineOrder.vue'),
      }, {
        path: 'course',
        name: 'Course',
        component: () => import('../views/Mine/Child/MineCourse.vue'),
      }, {
        path: 'invoice',
        name: 'Invoice',
        component: () => import('../views/Mine/Child/MineInvoice.vue'),
      }, {
        path: 'primision',
        name: 'Primision',
        component: () => import('../views/Mine/Child/MinePrimision.vue'),
      }, {
        path: 'address',
        name: 'Address',
        component: () => import('../views/Mine/Child/MineAddress.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
