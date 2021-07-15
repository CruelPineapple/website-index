<template>
  <div class="footer">
		<!-- <div class="git">
			<img class="git-img" src="../assets/GitHub.png">
			<a href="https://github.com/CruelPineapple">CruelPineapple</a>
		</div> -->
    <div class="icp">
      互联网ICP备案：
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >蜀ICP备2021008207号-1</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: whitesmoke;
}
.git-img{
	width: 20px;
}
.icp{
	font-size: 10px;
}
</style>