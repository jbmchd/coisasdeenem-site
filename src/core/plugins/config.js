import { config, feature } from "@/core/config/config.js";

export default {
  install(Vue) {
    Vue.appConfig = config;
    Vue.feature = feature;
    Vue.prototype.$appConfig = config;
    Vue.prototype.$feature = feature;
  }
};
