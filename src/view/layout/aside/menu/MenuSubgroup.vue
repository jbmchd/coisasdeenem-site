<template>
  <li
    v-if="items.length"
    aria-haspopup="true"
    data-menu-toggle="hover"
    class="menu-item menu-item-submenu"
    v-bind:class="{
      'menu-item-open': hasActiveChildren(activeChildren)
    }"
  >
    <a href="#" class="menu-link menu-toggle">
      <i :class="['menu-icon', icon]"></i>
      <span class="menu-text"><slot></slot></span>
      <i class="menu-arrow"></i>
    </a>
    <div class="menu-submenu">
      <ul class="menu-subnav">
        <li aria-haspopup="true" class="menu-item menu-item-parent">
          <span class="menu-link">
            <span class="menu-text"><slot></slot></span>
          </span>
        </li>
        <template v-for="(item, i) in items">
          <li
            v-if="
              item.hasOwnProperty('items') && item.items.length && item.section
            "
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
    </div>
  </li>
  <!-- </span> -->
</template>

<script>
import KTMenuItem from "./MenuItem";
{
  KTMenuItem;
}
export default {
  name: "KTMenuSubgroup",
  components: {
    KTMenuItem
  },
  props: {
    icon: String,
    items: Array,
    activeChildren: String
    // section: String
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
