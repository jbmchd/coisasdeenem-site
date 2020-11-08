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
  EU,
  ENTRAR,
  SAIR,
  REGISTRAR,
  ENVIAR_EMAIL_TROCAR_SENHA,
  TROCAR_SENHA
} from "@/core/store/auth/actions";

export { PURGE_AUTH, SET_AUTH, SET_PASSWORD, SET_ERROR };
export { EU, ENTRAR, SAIR, REGISTRAR, ENVIAR_EMAIL_TROCAR_SENHA, TROCAR_SENHA };

export default {
  state,
  actions,
  mutations,
  getters
};
