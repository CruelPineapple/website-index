<template>
  <div class="MainContainer">
    <img class="logo" alt="Rice Shower!!!" src="../assets/newrice.png" />
    <div class="carousel-container">
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "MainContainer",
  components: {
    Carousel,
  },
};
</script>

<style scoped>
.logo {
  height: 300px;
  scale: 1;
}
.carousel-container {
  width: 900px;
  float: right;
}
</style>
