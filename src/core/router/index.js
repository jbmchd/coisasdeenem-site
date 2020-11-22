/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
import store from "@/core/store";
import { EU } from "@/core/store/auth";
import { RESET_LAYOUT_CONFIG } from "@/core/store/core/config.module";

import rotas_site from "./site";
import rotas_auth from "./auth";
import rotas_app from "./app";

import middleware_notification from "@/core/middleware/clearNotification.js";

Vue.use(Router);

let rotas = rotas_site.concat(rotas_auth).concat(rotas_app);
const router = new Router({ mode: "history", routes: rotas });

/**
 * Original
 */
router.beforeEach((to, from, next) => {
  store.dispatch("rotas/iniciar_processo");
  middleware_notification(store);

  // Ensure we checked auth before each page load.

  Promise.all([store.dispatch(EU)]).then(() => {
    store.dispatch("aplicacaoPronta", true);
    next();
  });

  // reset config to initial state
  store.dispatch(RESET_LAYOUT_CONFIG);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

router.afterEach(() => {
  setTimeout(() => {
    store.dispatch("rotas/terminar_processo");
  }, 1500);
});

export default router;
