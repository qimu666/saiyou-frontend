import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useTitle } from "@vueuse/core";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: () => import("../pages/HomeView.vue"),
  },
  {
    path: "/my_info",
    name: "我的信息",
    component: () => import("../pages/MyInfoPage.vue"),
  },
  {
    path: "/community",
    name: "社区",
    component: () => import("../pages/Community.vue"),
  },
  {
    path: "/competition",
    name: "竞赛",
    component: () => import("../pages/Competition.vue"),
  },
  {
    path: "/team",
    name: "队伍",
    component: () => import("../pages/Team.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // @ts-ignore
  useTitle(to.name ? to.name : "saiyou");
  next();
});

export default router;
