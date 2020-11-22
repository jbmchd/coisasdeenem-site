import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import rotas from "./rotas";
import axios from "./axios";
import menu from "./menu";
import central_mensagens from "@jbmchd/jb-vue-global/store/central_mensagens";

export default {
  htmlClass,
  config,
  breadcrumbs,
  rotas,
  axios,
  menu,
  ...central_mensagens
};
