import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: () => import("../pages/landing/landing.vue"),
  },
  {
    path: "/play",
    name: "PlayPage",
    component: () => import("../pages/play/play.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
