// ReturnTop 是对应组件的名字，要记得在 returnTop.vue 文件中还是 name 属性哦
import ReturnTop from './returnTop';

ReturnTop.install = Vue => Vue.component(ReturnTop.name, ReturnTop);

export default ReturnTop;