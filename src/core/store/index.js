import Vue from "vue";
import Vuex from "vuex";

// import auth from "./auth.module";
import global from "./global";
import auth from "./auth";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    auth,
    htmlClass,
    config,
    breadcrumbs,
    profile
  }
});
