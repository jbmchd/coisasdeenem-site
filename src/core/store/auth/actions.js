import AuthService from "@/core/services/auth.api.service";
import TokenService from "@jbmchd/jb-vue-global/services/token.service";
import {
  PURGE_AUTH,
  SET_AUTH,
  SET_PASSWORD,
  SET_ERROR,
  SET_EU
} from "@/core/store/auth/mutations";

// action types
export const EU = "eu";
export const ENTRAR = "entrar";
export const SAIR = "sair";
export const REGISTRAR = "registrar";
export const ENVIAR_EMAIL_TROCAR_SENHA = "enviarEmailTrocarSenha";
export const TROCAR_SENHA = "trocarSenha";

export default {
  [ENTRAR]({ commit, dispatch }, credentials) {
    return new Promise(resolve => {
      AuthService.entrar(credentials)
        .then(({ data }) => {
          commit(SET_AUTH, data.dados);
          dispatch("flashMessage", {
            type: "success",
            message: "Login realizado com sucesso"
          });
          resolve(data);
        })
        .then(() => {
          dispatch([EU]);
        })
        .catch(({ data }) => {
          commit(SET_ERROR, data);
          dispatch("flashMessage", { type: "error", ...data });
        });
    });
  },

  [SAIR]({ dispatch, commit }) {
    return new Promise(resolve => {
      let token = TokenService.getToken();
      if (token) {
        AuthService.sair(token)
          .then(({ data }) => {
            commit(PURGE_AUTH);
            dispatch("flashMessage", {
              type: "success",
              message: "Logout realizado com sucesso"
            });
            resolve(data);
          })
          .catch(({ data }) => {
            commit(SET_ERROR, data);
            dispatch("flashMessage", { type: "error", ...data });
          })
          .finally(() => {
            commit(PURGE_AUTH);
          });
      } else {
        commit(PURGE_AUTH);
      }
    });
  },

  [REGISTRAR]({ dispatch, commit }, credentials) {
    return new Promise(resolve => {
      AuthService.registrar(credentials)
        .then(({ data }) => {
          commit(SET_AUTH, data);
          dispatch("flashMessage", {
            type: "success",
            message: data.mensagens
          });
          resolve(data);
        })
        .catch(({ data }) => {
          commit(SET_ERROR, data);
          dispatch("flashMessage", { type: "error", ...data });
        });
    });
  },

  [EU]({ dispatch, commit }) {
    return new Promise((resolve, reject) => {
      let token = TokenService.getToken();
      if (token) {
        AuthService.setAxiosToken(token);
        AuthService.eu()
          .then(({ data }) => {
            commit(SET_EU, data.dados);
            resolve(data)
          })
          .catch(({ data }) => {
            commit(PURGE_AUTH);
            commit(SET_ERROR, data);
            dispatch("flashMessage", { type: "error", ...data });
            reject(data)
          });
      } else {
        commit(PURGE_AUTH);
        resolve(true)
      }
    });
  },

  [ENVIAR_EMAIL_TROCAR_SENHA]({ dispatch, commit }, payload) {
    return AuthService.enviarEmailTrocarSenha(payload).then(({ data }) => {
      commit(SET_PASSWORD, data);
      dispatch("flashMessage", { type: "success", message: data.mensagens });
      return data;
    });
  },

  [TROCAR_SENHA]({ dispatch, commit }, payload) {
    return AuthService.trocarSenha(payload).then(({ data }) => {
      commit(SET_PASSWORD, data);
      dispatch("flashMessage", { type: "success", message: data.mensagens });
      return data;
    });
  },

  flashMessage({ dispatch }, payload) {
    let title_html = typeof payload.message == "string" ? "title" : "html";
    let action = payload.type == "error" ? "showError" : "showSuccess";
    dispatch(
      `flash_messages/${action}`,
      { [title_html]: payload.message },
      {
        root: true
      }
    );
  }
};
