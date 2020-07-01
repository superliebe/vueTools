<template>
  <div>
    <ul class="km-ul">
      <li class="km-li" v-for="(item,index) in list" :key="index" @click="toDetail(item)">
        <div class="li-title">{{item.title}}</div>
        <div class="li-des">{{item.des}}</div>
        <div class="li-bottom">
          <div class="li-bottom-text">点击查看</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "returnTop",
  components: {},
  data() {
    return {
      list: [{
          title:'返回顶部',
          des:'点击实现从页面底部返回到顶部功能',
          path:'/returnTop'
      },{
          title:'暂无数据',
          des:'处理空列表数据的展示',
          path:'/noMessage'
      }]
    };
  },
  mounted() {},
  methods: {
      toDetail(item){
        this.$router.push(item.path)
      },
  }
};
</script>
<style scoped>

.km-ul {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
}
.km-li {
  background: #fff;
  flex: 0 0 32%;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
}
.km-li:hover {
  box-shadow: 2px 2px 10px 2px #e8e8e8;
}
.li-title {
  color: #000;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}
.li-des {
  color: #888;
  margin-bottom: 15px;
}
.li-bottom {
  text-align: right;
  color: #3498db;
}
</style>
