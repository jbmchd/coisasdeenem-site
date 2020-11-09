import TokenService from "@jbmchd/jb-v-global/services/token.service";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";
export const SET_EU = "setEu";

export default {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, data) {
    state.isAuthenticated = true;
    state.errors = {};
    TokenService.saveToken(data.token.plainTextToken);
  },
  [SET_EU](state, eu) {
    state.isAuthenticated = true;
    state.errors = {};
    state.user = eu;
  },
  [SET_PASSWORD](state, senha) {
    state.user.senha = senha;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    TokenService.destroyToken();
  }
};
