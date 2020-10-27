import Vue from "vue";
import App from "./App.vue";
import router from "@/core/router";
import store from "@/core/store";
import ApiService from "@/core/services/api.service";
import MockService from "@/core/mock/mock.service";
import configPlugin from "@/core/plugins/config.js";
Vue.use(configPlugin);

Vue.config.productionTip = false;

// Vue 3rd party plugins
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/vendor";

// API service init
ApiService.init();

// Remove this to disable mock API
MockService.init();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
