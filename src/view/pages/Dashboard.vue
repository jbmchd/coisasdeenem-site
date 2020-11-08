<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
      <div>Dashboard Coisas de Enem</div>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/store/core/breadcrumbs.module";

export default {
  name: "dashboard",

  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {}
};
</script>
