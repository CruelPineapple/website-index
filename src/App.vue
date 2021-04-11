<template>
  <div id="app">
    <MainContainer/>
    <div class="icp">
      互联网ICP备案：
      <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2021008207号-1</a>
    </div>
  </div>
</template>

<script>
import MainContainer from './components/MainContainer.vue'


export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.icp{
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
