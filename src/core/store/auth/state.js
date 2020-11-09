import TokenService from "@jbmchd/jb-v-global/services/token.service";

export default {
  errors: null,
  user: {},
  isAuthenticated: !!TokenService.getToken()
};
