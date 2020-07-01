<template>
  <div id="app">
    <!--在页面中添加路由视图标签以便展示内容-->
    <h1 class="km-title" @click="toHome">vue项目常用组件</h1>
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
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.container {
  max-width: 1000px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 2px #e8e8e8;
  padding: 20px;
  margin: 20px auto;
}
.km-title {
  text-align: center;
  padding: 30px 0;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
