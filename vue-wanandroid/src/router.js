import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/path', component: component }]
  
});
export default router