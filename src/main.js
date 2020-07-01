//main.js用于本地测试组件
import Vue from 'vue';
import App from './App.vue';
import './assets/css/style.css';
import './assets/css/iconfont.css';
//引入测试组件
import vueutils from './index.js';


import router from "./router";

Vue.use(vueutils)

Vue.prototype.$vueutils = vueutils

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
