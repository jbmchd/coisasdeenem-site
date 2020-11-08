export default {
  SET_LOADING(state, options) {
    state.loading = Object.assign(state.loading, options);
  },
  SET_APLICACAO_PRONTA(state, aplicacao_pronta) {
    state.aplicacao_pronta = aplicacao_pronta;
  }
};
