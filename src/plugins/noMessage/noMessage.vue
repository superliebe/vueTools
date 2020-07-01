<template>
  <div class="no_message">
    <i class="iconfont_style" :class="icon"></i>
    <div class="no_message_tips">{{tips}}</div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "ToolNoMessage",
  props: {
    tips: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.no_message {
  text-align: center;
  padding-top: 200px;
  color: #999;
}
.iconfont_style {
  font-size: 80px;
}
.no_message_tips {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 16px;
  letter-spacing: 5px;
}
</style>
