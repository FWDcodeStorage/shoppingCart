import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    path: "/shop",
    name: "ShoppingCart",
    component: () => import("../views/ShoppingCart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
