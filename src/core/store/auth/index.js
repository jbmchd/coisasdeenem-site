import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import {
  PURGE_AUTH,
  SET_AUTH,
  SET_PASSWORD,
  SET_ERROR
} from "@/core/store/auth/mutations";

import {
  VERIFY_AUTH,
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_PASSWORD
} from "@/core/store/auth/actions";

export { PURGE_AUTH, SET_AUTH, SET_PASSWORD, SET_ERROR };
export { VERIFY_AUTH, LOGIN, LOGOUT, REGISTER, UPDATE_PASSWORD };

export default {
  state,
  actions,
  mutations,
  getters
};
