<template>
  <div class="main-container">
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
.main-container{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.logo {
	margin: 40px;
  height: 300px;
  scale: 1;
}
.carousel-container {
  width: 900px;
  float: right;
	margin: 40px;
}
</style>
