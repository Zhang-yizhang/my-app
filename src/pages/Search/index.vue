<template>
  <div class="container">
    <TypeNav></TypeNav>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
export default {
  name: "Search",
  components: {
    TypeNav,
  },
  props: {
    // 路由组件可以传递props
    keyWord: "",
  },
};
</script>

<style>
</style>