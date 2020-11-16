<template>
  <footer>
    <router-link
      :to="nav.link"
      :class="{ 'active-router-link': active }"
      v-for="nav in navMenu"
      :key="nav.name"
      >{{ nav.name }}</router-link
    >
  </footer>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";
export default defineComponent({
  setup(props, ctx) {
    const navMenu = [
      { name: "首页", link: "/" },
      { name: "发现", link: "/discover" },
      { name: "订单", link: "/order" },
      { name: "我的", link: "/profile" }
    ];
    console.log(toRefs(props), ctx);

    const active = computed(() => {
      return "aaa";
    });
    return {
      active,
      navMenu
    };
  }
});
</script>
<style lang="scss" scoped>
.active {
  color: "#0089dc";
}
</style>
