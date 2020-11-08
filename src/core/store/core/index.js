import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";
import rotas from "./rotas";
import axios from "./axios";
import menu from "./menu";
import central_mensagens from "@jbmchd-vue/jb-v-global/store/central_mensagens";

export default {
  htmlClass,
  config,
  breadcrumbs,
  profile,
  rotas,
  axios,
  menu,
  ...central_mensagens
};