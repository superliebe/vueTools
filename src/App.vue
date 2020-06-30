<template>
  <div id="app">
    <!--在页面中添加路由视图标签以便展示内容-->
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    // Vue.prototype.$vueutils.func.showVersion()
  }
};
</script>

<style>
    .container{
        max-width: 1000px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 2px 2px 10px 2px #e8e8e8;
        padding: 20px;
        margin: 80px auto;
    }
</style>
