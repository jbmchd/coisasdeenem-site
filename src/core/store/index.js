import Vue from "vue";
import Vuex from "vuex";

import core from "./core";

import global from "./global";
import auth from "./auth";
import profile from "./profile.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...core,
    global,
    auth,
    profile
  }
});
