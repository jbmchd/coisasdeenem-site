import TokenService from "@/core/services/token.service";

export default {
  errors: null,
  user: {},
  isAuthenticated: !!TokenService.getToken()
};
