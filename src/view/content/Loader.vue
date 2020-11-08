<template>
  <div class="vld-parent">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    >
      <slot> <rotate-square2 /> </slot
    ></loading>
  </div>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import { RotateSquare2 } from "vue-loading-spinner";

export default {
  name: "Loader",
  components: {
    Loading,
    RotateSquare2
  },
  props: {
    isLoading: { type: Boolean, default: false },
    fullPage: { type: Boolean, default: true },
    canCancel: { type: Boolean, default: false },
    onCancel: { type: Function, default: v => v }
  },
  data() {
    return {};
  },
};
</script>
