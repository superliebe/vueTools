import Vue from "vue";
import Router from "vue-router";
import returnTop from './example/returnTop';
import home from './example/home';
import noMessage from './example/noMessage';

Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    name: "/home",
    component: home
  }, {
    path: "/returnTop",
    name: "returnTop",
    component: returnTop
  },{
    path: "/noMessage",
    name: "noMessage",
    component: noMessage
  }, ]
});
