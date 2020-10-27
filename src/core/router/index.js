import Vue from "vue";
import Router from "vue-router";
import store from "@/core/store";
import { VERIFY_AUTH } from "@/core/store/auth";
import { RESET_LAYOUT_CONFIG } from "@/core/store/config.module";

import rotas_site from "./site";
import rotas_auth from "./auth";
import rotas_app from "./app";

Vue.use(Router);

let rotas = rotas_site.concat(rotas_auth).concat(rotas_app);
const router = new Router({ mode: "history", routes: rotas });

router.beforeEach((to, from, next) => {
  // Ensure we checked auth before each page load.
  Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

  // reset config to initial state
  store.dispatch(RESET_LAYOUT_CONFIG);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
