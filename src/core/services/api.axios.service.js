import axios from "axios";
import store from "@/core/store";
import AxiosService from "@jbmchd/jb-v-global/services/axios.service";

const axios_interceptor_request_success = config => {
  // console.log(config);
  // Antes da request
  store.dispatch("axios/incrementar_processos");
  return config;
};

const axios_interceptor_request_error = error => {
  // console.log(error);
  // Erro na request
  store.dispatch("axios/decrementar_processos");
  return Promise.reject(error);
};

const axios_interceptor_response_success = response => {
  // console.log(response);
  store.dispatch("axios/decrementar_processos");
  return response;
};

const axios_interceptor_response_error = async ({ response }) => {
  // console.log(response);
  // Qualquer resultado diferente de 2xx
  store.dispatch("axios/decrementar_processos");
  response.data = await store.dispatch(
    "axios/verificarErroResponse",
    response.data
  );
  return Promise.reject(response);
};

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  ...AxiosService,
  init() {
    axios.interceptors.request.use(
      axios_interceptor_request_success,
      axios_interceptor_request_error
    );
    axios.interceptors.response.use(
      axios_interceptor_response_success,
      axios_interceptor_response_error
    );

    AxiosService.init();
  }
};

export default ApiService;
