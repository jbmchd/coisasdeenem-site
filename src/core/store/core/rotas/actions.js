export default {
  iniciar_processo({ commit, dispatch }) {
    commit("SET_INICIAR_PROCESSO");
    dispatch("nprogress_controlar", null, { root: true });
    dispatch("loading_ativar", null, { root: true });
  },
  terminar_processo({ commit, dispatch }) {
    commit("SET_TERMINAR_PROCESSO");
    dispatch("nprogress_controlar", null, { root: true });
    dispatch("loading_desativar", null, { root: true });
  }
};
