const idvisual = {
  color: {
    preto: "#282828",
    azul: "#3caee3",
    azul_escuro: " #289dd8",
    amarelo: "#ffb734",
    amarelo_escuro: " #feac15",
    laranja: "#fe8344",
    vinho: "#a13233"
  },

  logo: {
    xs: "/id-visual/logo/xs.png",
    sm: "/id-visual/logo/sm.png",
    md: "/id-visual/logo/md.png",
    lg: "/id-visual/logo/lg.png",
    xlg: "/id-visual/logo/xlg.png",
    xxlg: "/id-visual/logo/xxlg.png",
    xxxlg: "/id-visual/logo/xxxlg.png"
  }
};

export default {
  install(Vue) {
    Vue.prototype.$idvisual = idvisual;
  }
};
