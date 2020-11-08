import Nprogress from "nprogress";
import componentes from "@jbmchd-vue/jb-v-global/componentes";

export default {
  async buscarDadosIniciais({ dispatch, getters }) {
    let result = false;

    let token = getters["auth/token"];
    if (!token) {
      return true;
    }

    let pessoa = getters["auth/pessoa"];
    if (token && !pessoa) {
      dispatch("auth/auth", null, { root: true });
      await dispatch("sessao/buscar", null, { root: true }).catch(() => {});
      result = true;
    }

    return result;
  },
  aplicacaoPronta({ commit }, aplicacao_pronta) {
    commit("SET_APLICACAO_PRONTA", aplicacao_pronta);
  },
  loading_ativar({ commit }) {
    commit("SET_LOADING", { active: true });
  },
  loading_desativar({ commit }) {
    commit("SET_LOADING", { active: false });
  },
  toast(context, mensagem_ou_options) {
    componentes.toast(mensagem_ou_options);
  },
  nprogress_controlar({ dispatch, rootState }) {
    let axios_processos_qtd = rootState.axios.processos_qtd;
    let rotas_esta_processando = rootState.rotas.esta_processando;
    if (axios_processos_qtd > 0 || rotas_esta_processando) {
      dispatch("nprogress_start");
    } else {
      dispatch("nprogress_done");
    }
  },
  nprogress_start() {
    Nprogress.start();
  },
  nprogress_done() {
    Nprogress.done();
  }
};
