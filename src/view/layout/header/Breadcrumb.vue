<template>
  <div class="d-flex align-items-center flex-wrap mr-1">
    <h5 class="text-dark font-weight-bold my-2 mr-5">
      <!-- {{ title }}  -->
    </h5>
    <ul
      class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2"
    >
      <li class="breadcrumb-item">
        <router-link :to="'/'" class="subheader-breadcrumbs-home">
          <i class="flaticon2-shelter text-muted icon-1x"></i>
        </router-link>
      </li>

      <template v-for="(breadcrumb, i) in breadcrumbs">
        <li class="breadcrumb-item" :key="`${i}-${breadcrumb.id}`">
          <router-link
            v-if="breadcrumb.route"
            :key="i"
            :to="breadcrumb.route"
            class="text-muted"
          >
            {{ breadcrumb.title }}
          </router-link>
          <span class="text-muted" :key="i" v-if="!breadcrumb.route">
            {{ breadcrumb.title }}
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss">
.custom-v-dropdown {
  &.dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  &.dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTBreadcrumb",
  computed: {
    ...mapGetters(["breadcrumbs", "pageTitle", "layoutConfig"])
  }
};
</script>
