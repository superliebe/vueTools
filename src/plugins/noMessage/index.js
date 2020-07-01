// ReturnTop 是对应组件的名字，要记得在 returnTop.vue 文件中还是 name 属性哦
import NoMessage from './noMessage';

NoMessage.install = Vue => Vue.component(NoMessage.name, NoMessage);

export default NoMessage;