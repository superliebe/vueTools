<template>
  <div class="right-return-top">
    <div
      class="return-top"
      @click="returnTop"
      v-show="topShow"
      :style="{ width: config.width, height: config.height}"
    >
      <img :src="imgSrc" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ToolReturnTop",
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          width: "40px",
          height: "40px",
        };
      }
    },
    imgSrc: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAACXBIWXMAAAsSAAALEgHS3X78AAADGUlEQVR4nO2aT2vTYBzHv0/S9aKw7rJz34E5mP6zrRmOjeFgKozBcFAZwkAc6sHrttNgUBBPA5HNi5eBsJPX1k1XT9p3UF/B+g4iadI2ydI0T9P0SfX3hZDmeZI8n9/3efL8acJ0XYefJN/cICckHEfLGR3zCWB+BqjWWSfNYHBsT/O6/diZuaSamW/KvZPCRzEBH5wnPMnp2Ck5y3SE+TiruH2ZAOTQIkKXMM03WM4onYoz5K48m/4BE6kdxOEGCc/UBVXHLQmd7bYM6/cBDmv77lMjrsaNvI7t4u/RbrCaNdDmANzBbnnwTW6MDsam3W3rDzOp3vHLku55XpBec5ioJY6hIYVV6AgIYOoBvLvDQTK6ySQDZhgc+6TkTvPsOr005U/BRl7BVsG3ux6m0RxYzSpIsl+uKmji+EKJFmBBtRc8hy+Ndi/PmMCZbaCJaj04yKBxZuC2pKa4r/HZqCsmAOEA1AgJgAAIgACmaFasqftIsL3+NMxrdmz9PrL+mw0gGoymvBFuFtqo3EuJAVjPG1PyWQDXeF4cGWI0gLVct/A/Vso1XpRGguAHWMl2C2/i8480gGc9iNdlbgg+gMVMv/CzK3P1c/r91AHx9j4XRHAATVV6hZ83nEuvD5d2iHc8AHxLqQdq2jf/VenGCxhamhEAARAAAQyT8J5QtITXgGiRATFgECoyIAYMQkUGxIBBqMiAGDAIFd9L+6DS1DQY0pAZIBs2W3vZtpdcx55pjmtbOKy1xo0ajQFABcDemO95ACDQlxA8orVADBiESqwBm4U0tgqh/t4OKzGPwHpegYQaZDZrdXBNyEzDx8t2gKvHqskasJZTIFuBe48CphHHFxMzYjIGrGT7gfeHQTNYGY8gsxPXMGjmvf8WuRHRGrCYMQOXbIF3gzu7cga3XaxAwolrHtCExDRU65EZEY0BxqsUZqtxyRb4ecM/mJ1SBbLNiO61Rxxfw3EouhZgfOYnsxpktDq1+PUnXy3ulk0jJPYJ1XolGkiaCNFEiAyIAYNQkQExYBAqMiAGDEJFBsSAQaj+bwMA/AVQMPelPAquSAAAAABJRU5ErkJggg=="
    }
  },
  data() {
    return {
      scroll: 0,
      topShow: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrolls);
  },
  methods: {
    returnTop() {
      window.scroll(0, 0);
      //   let back = setInterval(() => {
      //     if (document.body.scrollTop || document.documentElement.scrollTop) {
      //       document.body.scrollTop -= 100;
      //       document.documentElement.scrollTop -= 100;
      //     } else {
      //       clearInterval(back);
      //     }
      //   });
    },
    scrolls() {
      this.scroll =
        document.documentElement &&
        document.documentElement.scrollTop + document.body.scrollTop;
      if (this.scroll > window.innerHeight / 2) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }
    }
  }
};
</script>
<style scoped>
/* 返回顶部 */

.right-return-top {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1.2rem;
  z-index: 9;
  margin: auto;
}

.return-top {
  width: 40px;
  height: 40px;
  z-index: 9;
  margin: 0 auto;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2) !important;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2) !important;
  border-radius: 150px;
  -webkit-animation: show 350ms ease-out forwards 1;
  animation: show 350ms ease-out forwards 1;
  cursor: pointer;
}

.return-top img {
  width: 100%;
  height: 100%;
}

@-webkit-keyframes show {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    opacity: 0.5;
    -webkit-transform: rotate(-3deg) translateY(-0.2rem);
  }
  75% {
    -webkit-transform: rotate(3deg);
  }
  100% {
    opacity: 0.9;
    -webkit-transform: rotate(0deg);
  }
}

@keyframes show {
  0% {
    transform: rotate(0deg);
  }
  25% {
    opacity: 0.5;
    transform: rotate(-3deg) translateY(-0.2rem);
  }
  75% {
    transform: rotate(3deg);
  }
  100% {
    opacity: 0.9;
    transform: rotate(0deg);
  }
}
</style>
