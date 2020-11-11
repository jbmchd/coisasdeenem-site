import TokenService from "@jbmchd/jb-vue-global/services/token.service";

export default {
  errors: null,
  user: {},
  isAuthenticated: !!TokenService.getToken()
};
