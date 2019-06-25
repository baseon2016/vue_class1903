<template>
  <div class="header">
    <!-- 如何向子组件传递非str数据 -->
    <!-- vue父组件向子组件传递函数 1,普通的属性方式传递,子组件用props接收 -->
    <!-- 2，父组件向子组件传递自定义时间，子组件使用$emit('自定义时间名') 接收。在template内直接使用$emit('自定义时间名') 在script内 this.$emit('自定义事件名') -->

    <Button type="login" text="登录" :handleClick="login"/>
    <Button type="signup" text="注册" @handleSignup="signup"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "topSection",
  components: {
    Button
  },
  methods: {
    login() {
      console.log("我是header内的登录");
    },
    signup() {
      console.log("我是Header内的注册");
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 300px;
  background-color: greenyellow;
  text-align: center;
}
</style>
