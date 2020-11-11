import componentes from "@jbmchd/jb-vue-global/componentes";

export default class AppError extends Error {
  constructor(data, ...defaultParams) {
    super(...defaultParams);

    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, AppError);
    // }
    this.name = this.constructor.name;
    this.date = new Date();
    this.data = data;
  }
  get() {
    let obj = {
      name: this.name,
      message: this.message,
      date: this.date,
      stack: this.stack,
      at: this.stack.split("\n")[3]
    };

    for (const i in this) {
      const el = this[i];
      obj[i] = el;
    }

    return obj;
  }
  toJson() {
    JSON.stringify(this.get());
  }
  toJSON() {
    return this.toJson();
  }
  showAlert() {
    let alert_options = this.getAlertOptions();
    /** SweetAlert Options */
    componentes.alert(alert_options);
  }
  showToast() {
    let toast_options = this.getAlertOptions();
    componentes.toast(toast_options);
  }
  getAlertOptions() {
    let error_data = this.get().data;
    console.log("opa", error_data);
    let alert_data = {
      title: "Ocorreu algum problema",
      html: error_data.message,
      icon: "error"
    };

    if (error_data.hasOwnProperty("alert") && error_data.alert) {
      if (typeof error_data.alert == "string") {
        alert_data.html = error_data.alert;
      } else {
        alert_data = error_data.alert;
      }
    }
    return alert_data;
  }
}
