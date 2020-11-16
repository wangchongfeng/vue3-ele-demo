import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/discover",
    name: "Discover",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "discover" */ "../views/Discover/index.vue")
  },
  {
    path: "/order",
    name: "Order",
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/Order/index.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
