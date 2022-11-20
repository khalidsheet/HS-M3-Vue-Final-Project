import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import LandingView from "../views/LandingView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: LandingView,
  },
  {
    path: "/projects",
    component: ProjectsView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
