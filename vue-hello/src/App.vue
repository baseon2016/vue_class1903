<template>
  <div>
    <h1>hello world</h1>
    <Button/>
  </div>
</template>

<script>
import Button from "./components/Button";
//组件化开发 把一个项目分成若干个组件   类似于我们之前的公共样式和公共js
export default {
  //小名  不能和html的标签一样 一般都是小写 一般是必须的
  name: "app",
  components: {
    Button
  }
};
</script>

<style>
/* 样式是全局的 */
</style>
