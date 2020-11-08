import Vue from "vue";

const map = ["AppError"];

// eslint-disable-next-line no-unused-vars
Vue.config.errorHandler = (err, vm, info) => {
  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.
  if (!map.includes(err.name)) {
    throw err;
  }

  let error = err.get();
  if (error.data.hasOwnProperty("tipo_alerta")) {
    switch (error.data.tipo_alerta) {
      case "alert":
        err.showAlert();
        break;
      case "toast":
        err.showToast();
        break;
    }
  } else {
    err.showAlert();
  }
};
