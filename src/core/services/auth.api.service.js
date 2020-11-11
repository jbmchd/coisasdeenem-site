import Vue from "vue";
import ApiAxiosService from "./api.axios.service";
import axios from "axios";
// import ApiAxiosService from "@jbmchd-vue/jb-v-global/services/api.axios.service";

/**
 * Service to call HTTP request via Axios
 */
const service = "auth";

const AuthService = {
  ...ApiAxiosService,
  getResource(resource = null) {
    return [service, resource].join("/");
  },

  setAxiosToken(token) {
    Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  eu() {
    return ApiAxiosService.post(this.getResource("eu"));
  },

  entrar(credentials) {
    return axios.get("sanctum/csrf-cookie").then(response => {
      return ApiAxiosService.post(this.getResource("entrar"), credentials);
    });
  },

  sair(token) {
    return ApiAxiosService.post(this.getResource("sair"), { token });
  },

  registrar(payload) {
    return ApiAxiosService.post(this.getResource("registrar"), payload);
  },

  enviarEmailTrocarSenha(senha) {
    return ApiAxiosService.post(this.getResource("enviar-email-trocar-senha"), {
      senha
    });
  },

  trocarSenha(senha) {
    return ApiAxiosService.post(this.getResource("enviar-email-trocar-senha"), {
      senha
    });
  }
};

export default AuthService;
