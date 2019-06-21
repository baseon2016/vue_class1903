<template>
  <div>
    <h1 v-bind:class="bool?'active':''">{{new Date}}</h1>
    <Demo/>
  </div>
</template>

<script>
import Demo from "./components/Demo";
//模板语法
export default {
  name: "app",
  //data:vue 组件的数据或叫state(状态)
  //vue提倡只要是页面发生变化必须通过控制data的改变来实现
  data() {
    return {
      //引入数据相当于创立参数bool,实现对template内容的控制
      bool: false
    };
  },
  components: {
    Demo
  }
};
</script>

<style>
/* .active {
  color: red;
} */
</style>
