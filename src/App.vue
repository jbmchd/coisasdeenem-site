<template>
  <router-view></router-view>
</template>

<style lang="scss">
// 3rd party plugins css
@import "assets/sass/layout.scss";

// Main demo style scss
@import "assets/sass/style.vue";
</style>

<script>
import { OVERRIDE_LAYOUT_CONFIG } from "@/core/store/config.module";

export default {
  name: "MetronicVue",
  mounted() {
    /**
     * this is to override the layout config using saved data from localStorage
     * remove this to use config only from static json (@/core/config/layout.config.json)
     */
    this.$store.dispatch(OVERRIDE_LAYOUT_CONFIG);
  }
};
</script>
