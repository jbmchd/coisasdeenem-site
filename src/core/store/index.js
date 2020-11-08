import Vue from "vue";
import Vuex from "vuex";

import global from "./global";
import auth from "./auth";

import core from "./core";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...core,
    global,
    auth
  }
});
