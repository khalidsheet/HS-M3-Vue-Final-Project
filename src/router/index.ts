import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import("../views/LandingView.vue"),
  },
  {
    path: "/projects",
    component: () => import("../views/ProjectsView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
