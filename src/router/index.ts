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
  {
    path: "/projects/:id",
    props: true,
    component: () => import("../views/ProjectView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
