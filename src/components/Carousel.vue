<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item class="item">
      <h2 @click="Log">Log</h2>
      <h4 @click="Log">讲故事</h4>
      <img @click="Log" class="arrow" src="../assets/编辑.png" />
    </el-carousel-item>
    <el-carousel-item class="item">
      <h2 @click="BootCamp">BootCamp</h2>
      <h4 @click="BootCamp">练习场</h4>
      <img @click="BootCamp" class="arrow" src="../assets/项目.png" />
    </el-carousel-item>
    <el-carousel-item class="item">
      <h2 @click="Experience">Experience</h2>
      <h4 @click="Experience">笔记本</h4>
      <img @click="Experience" class="arrow" src="../assets/公开 结果.png" />
    </el-carousel-item>
    <el-carousel-item class="item">
      <h2 @click="Git">GitHub</h2>
      <h4 @click="Git">仓库</h4>
      <img @click="Git" class="arrow" src="../assets/GitHub.png">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  methods: {
    Log: function () {
      this.$notify({
        title: "提示",
        message: "页面开发中",
        type: "warning",
      });
    },
    BootCamp: function () {
      this.$notify({
        title: "提示",
        message: "页面开发中",
        type: "warning",
      });
    },
    Experience: function () {
      this.$notify({
        title: "提示",
        message: "页面开发中",
        type: "warning",
      });
    },
    Git: function(){
      window.open("https://github.com/CruelPineapple")
    }
  },
};
</script>

<style scoped>
.item {
  background-color: #e6e6e6bb;
}
/* .item2 {
  background-color: #e6e6e6bb;
}
.item3 {
  background-color: #e6e6e6bb;
} */
.arrow {
  width: 100px;
}
</style>
