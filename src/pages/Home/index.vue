<template>
  <div class="container">
    <TypeNav />
    <ListContainer></ListContainer>
    <Recmond></Recmond>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recmond from './Recmond'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name:"Index",
  components:{
    ListContainer,
    Recmond,
    Rank,
    Like,
    Floor,
    Brand
  }
};
</script>

<style scoped>

</style>