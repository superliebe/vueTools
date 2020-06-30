//index.js用于发布时组件的主文件
// 方式1 -- 封装组件
import Vue from 'vue';
import ReturnTop from './plugins/returnTop/index.js';
import func from './plugins/func/index.js';
// ...如果还有的话继续添加
const components = [
  ReturnTop,
]
//循环遍历注册组件，就可以向其他ui组件库那样，使用Vue.use()来全局使用
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
    install,
    func
}


// 方式2,可以少些 一层index.js，可以支持单组件直接调用，封装方法

// import other from './plugins/other/index.js';
// const Components = {
//     other,
// };

// Object.keys(Components).forEach(name => {
//     Vue.component(name, Components[name]);
// });

// console.log(Components)

// export default Components;