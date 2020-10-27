<template>
  <router-link
    v-if="to"
    :to="to"
    v-slot="{ href, navigate, isActive, isExactActive }"
  >
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item"
      :class="[
        isActive && 'menu-item-active',
        isExactActive && 'menu-item-active'
      ]"
    >
      <a :href="href" class="menu-link" @click="navigate">
        <i :class="['menu-icon', getIcon]"> <span></span> </i>
        <span class="menu-text"><slot></slot></span>
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "KTMenuItem",
  props: {
    icon: String,
    to: String
  },
  computed: {
    getIcon() {
      return this.icon === undefined
        ? "menu-bullet menu-bullet-dot"
        : this.icon;
    }
  }
};
</script>
