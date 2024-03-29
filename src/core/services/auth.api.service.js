import Vue from "vue";
import ApiAxiosService from "./api.axios.service";

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

  async entrar(credentials) {
    await this.csrf();
    return ApiAxiosService.post(this.getResource("entrar"), credentials);
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
