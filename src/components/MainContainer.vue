<template>
  <div class="main-container">
    <img class="logo" alt="Kira Kira" src="../assets/logo3.png" />
    <div class="carousel-container">
      <!-- <Carousel /> -->
      <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
        <div class="click-box" @click="Note">
          Note>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
        <div class="click-box" @click="BootCamp">
          BootCamp>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
        <!-- <div class="card-content"> -->
        <!-- <img class="arrow" src="../assets/GitHub.png"> -->
        <!-- <p style="display:inline-block">鼠标悬浮时显示</p> -->
        <!-- </div> -->
        <div class="click-box" @click="Git">
          Git>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// import Carousel from "../components/Carousel.vue";

export default {
  name: "MainContainer",
  components: {},
  methods: {
    BootCamp: function() {
      // this.$notify({
      //   title: "提示",
      //   message: "目前没有测试页面",
      //   type: "warning",
      // });
      window.open("http://sakurajimama1.ltd/asouldigits/");
    },
    Note: function() {
      window.open("http://sakurajimama1.ltd/note/", "_blank");
    },
    Git: function() {
      window.open("https://github.com/CruelPineapple");
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 850px) {
  /* 移动端 */
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    margin: 20px;
    height: 200px;
    scale: 1;
    border-radius: 50%;
  }
  .carousel-container {
    width: 300px;
    float: right;
    margin: 20px;
  }
  .card {
    margin-top: 10px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 60px;
  }
    .click-box{
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  /* .arrow {
  width: 60px;
} */
}
@media only screen and (min-width: 851px) {
  /* 桌面端 */
  .main-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .logo {
    margin: 40px;
    height: 300px;
    scale: 1;
    border-radius: 50%;
  }
  .carousel-container {
    width: 400px;
    float: right;
    margin: 40px;
  }
  .card {
    margin-top: 15px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 60px;
  }
  .click-box{
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  /* .card > .el-card__body{
    padding: 0;
} */
  /* .card-content{
    display: flex;
  align-items: center;

} */
  /* .arrow {
  width: 30px;
  display: inline-block;
} */
}
</style>
