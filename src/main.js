import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// import NutUi from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
// NutUi.install(Vue);

new Vue({
  render: h => h(App),
}).$mount('#app')
