import TokenService from "@jbmchd/jb-vue-global/services/token.service";

export default {
  // namespaced: true,
  errors: null,
  user: {},
  isAuthenticated: !!TokenService.getToken()
};
