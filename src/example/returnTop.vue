<template>
  <div class="container">
    <div class="test_box">测试滑动顶部</div>
    <tool-return-top></tool-return-top>
  </div>
</template>

<script>
export default {
  name: "returnTop",
  components: {},
  data() {
    return {
      msg: ""
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
