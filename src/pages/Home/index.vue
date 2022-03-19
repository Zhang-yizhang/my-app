<template>
  <div class="container">
    <TypeNav />
     <!--列表-->
    <ListContainer />
    <!--楼层-->
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
    <Recmond></Recmond>
    <Rank></Rank>
    <Like></Like>
    <Brand></Brand>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from "./ListContainer/index.vue";
import Recmond from "./Recmond";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recmond,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 触发vuex的异步action调用, 从mock接口请求数据到state中
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
};
</script>

<style scoped>
</style>