import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/core/---metronic/services/store";
import ApiService from "@/core/---metronic/services/api.service";
import MockService from "@/core/---metronic/mock/mock.service";
import { VERIFY_AUTH } from "@/core/---metronic/services/store/auth.module";
import { RESET_LAYOUT_CONFIG } from "@/core/---metronic/services/store/config.module";

Vue.config.productionTip = false;

// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "@/core/---metronic/plugins/vue-i18n";
import vuetify from "@/core/---metronic/plugins/vuetify";
import "@/core/---metronic/plugins/portal-vue";
import "@/core/---metronic/plugins/bootstrap-vue";
import "@/core/---metronic/plugins/perfect-scrollbar";
import "@/core/---metronic/plugins/highlight-js";
import "@/core/---metronic/plugins/inline-svg";
import "@/core/---metronic/plugins/apexcharts";
import "@/core/---metronic/plugins/treeselect";
import "@/core/---metronic/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import "@/core/---metronic/plugins/formvalidation";

// API service init
ApiService.init();

// Remove this to disable mock API
MockService.init();

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

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
