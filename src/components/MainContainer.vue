<template>
  <div class="main-container">
    <img class="logo" alt="Rice Shower!!!" src="../assets/logo2.png" />
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
@media only screen and (max-width: 850px) {
	/* 移动端 */
.main-container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.logo {
	margin: 20px;
  height: 200px;
  scale: 1;
}
.carousel-container {
  width: 400px;
  float: right;
	margin: 20px;
}
}
@media only screen and (min-width: 851px) {
	/* 桌面端 */
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
}

</style>
