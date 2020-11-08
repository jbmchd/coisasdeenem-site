import Vue from "vue";
import App from "./App.vue";
import router from "@/core/router";
import store from "@/core/store";
import ApiAxiosService from "@/core/services/api.axios.service";

import "@/core/errors/ErrorHandler";
require("@/core/plugins");

Vue.config.productionTip = false;

// Vue 3rd party plugins
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/vendor";

ApiAxiosService.init(Vue.env.API_BASE_URL);

// Remove this to disable mock API
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
