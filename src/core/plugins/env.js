import env from "@/core/config/env.config.js";

export default {
  install(Vue) {
    Vue.env = env;
  }
};
