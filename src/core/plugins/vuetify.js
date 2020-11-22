import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: colors.indigo.accent2,
        secondary: colors.indigo.lighten5,
        accent: colors.blue.accent3,
        error: colors.red.darken2,
        info: colors.blue.darken1,
        success: colors.green.darken1,
        warning: colors.orange.darken1
      }
    }
  }
});
