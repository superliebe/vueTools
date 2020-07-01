<template>
  <div class="container">
    <div class="test_box">测试滑动顶部</div>
    <tool-return-top :config="returnConfig"></tool-return-top>
  </div>
</template>

<script>
export default {
  name: "returnTop",
  components: {},
  data() {
    return {
      returnConfig:{
          width:'60px',
          height:'60px',
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.test_box {
  height: 2000px;
}
</style>
