<template>
  <v-app v-if="aplicacao_pronta">
    <!-- <v-button /> -->
    <router-view :key="$route.fullPath"></router-view>
    <Loader v-if="loading.isLoading" v-bind="loading" />
  </v-app>
</template>

<style lang="scss">
// 3rd party plugins css
@import "assets/sass/layout.scss";

// Main demo style scss
@import "assets/sass/style.vue";
</style>

<script>
import { OVERRIDE_LAYOUT_CONFIG } from "@/core/store/core/config.module";
import { mapGetters, mapActions } from "vuex";
import Loader from "@/view/content/Loader.vue";
// import VButton from "@/view/content/alertas/VButton.vue";

export default {
  name: "MetronicVue",
  components: {
    Loader
    // VButton,
  },
  computed: {
    ...mapGetters(["loading", "aplicacao_pronta"])
  },
  created() {
    this.aplicacaoPronta(false, this.aplicacao_pronta);
  },
  mounted() {
    /**
     * this is to override the layout config using saved data from localStorage
     * remove this to use config only from static json (@/core/config/layout.config.json)
     */
    this.$store.dispatch(OVERRIDE_LAYOUT_CONFIG);

    this.bloquearSeIE11();
    this.aplicacaoPronta(true, this.aplicacao_pronta);
  },
  methods: {
    ...mapActions([
      "loading_ativar",
      "aplicacaoPronta",
      "buscarDadosIniciais",
      "nprogress_start"
    ]),
    bloquearSeIE11() {
      // This if block is for IE 11
      if (!Object.entries)
        Object.entries = function(obj) {
          var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
          while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

          return resArray;
        };
    }
  }
};
</script>
