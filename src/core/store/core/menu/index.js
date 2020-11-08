import { menu } from "./data.js";

const state = {
  menu: []
};

const getters = {
  menu: state => {
    return state.menu;
  }
};

const actions = {
  criarMenu({ commit }) {
    commit("SET_MENU", menu);
  }
};

const mutations = {
  SET_MENU(state) {
    state.menu = menu;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
