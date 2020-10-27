<template>
  <ul v-if="menu.length" class="menu-nav">
    <template v-for="(item, i) in menu">
      <li
        v-if="item.hasOwnProperty('items') && item.items.length && item.section"
        class="menu-section"
        :key="`section_${i}`"
      >
        <h4 class="menu-text">{{ item.section }}</h4>
        <i class="menu-icon flaticon-more-v2"></i>
      </li>
      <KTMenuSubgroup
        v-if="item.hasOwnProperty('items')"
        :key="i"
        :icon="item.icon"
        :items="item.items"
        :activeChildren="item.activeChildren"
        >{{ item.text }}</KTMenuSubgroup
      >
      <KTMenuItem v-else :key="i" :icon="item.icon" :to="item.to">{{
        item.text
      }}</KTMenuItem>
    </template>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import KTMenuSubgroup from "./MenuSubgroup";
import KTMenuItem from "./MenuItem";

export default {
  name: "KTMenu",
  components: {
    KTMenuSubgroup,
    KTMenuItem
  },
  computed: {
    ...mapGetters("menu", ["menu"])
  },
  created() {
    this.criarMenu();
  },
  methods: {
    ...mapActions("menu", ["criarMenu"])
  }
};
</script>
