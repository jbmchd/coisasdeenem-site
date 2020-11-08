import router from "@/core/router";

export default {
  incrementar_processos({ commit, dispatch }) {
    commit("SET_INCREMENTAR_PROCESSOS");
    dispatch("nprogress_controlar", null, { root: true });
  },
  decrementar_processos({ commit, dispatch }) {
    commit("SET_DECREMENTAR_PROCESSOS");
    dispatch("nprogress_controlar", null, { root: true });
  },
  async verificarErroResponse({ dispatch }, data) {
    if (data.message == "Unauthenticated.") {
      data.message = "Não autenticado.";
      dispatch(
        "flash_messages/showError",
        {
          title: data.message
        },
        { root: true }
      );

      //   await dispatch("auth/sair", true, { root: true });
      //   if (router.currentRoute.path != "/entrar") {
      //     router.push("entrar");
      //   }
    }
    return data;
  }
};
