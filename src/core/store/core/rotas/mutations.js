export default {
  SET_INICIAR_PROCESSO(state) {
    state.esta_processando = true;
  },
  SET_TERMINAR_PROCESSO(state) {
    state.esta_processando = false;
  }
};
