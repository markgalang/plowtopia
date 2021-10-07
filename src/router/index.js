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
  {
    path: "/pre-sale",
    name: "PreSale",
    component: () => import("../pages/preSale/preSale.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
