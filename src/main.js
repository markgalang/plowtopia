import Vue from "vue";
import App from "./App.vue";
import VueScrollactive from "vue-scrollactive";
import VueRouter from "vue-router";
import router from "@/router";

Vue.use(VueScrollactive);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
