<template>
  <div>
    <h1>webpack 搭建 vue环境</h1>
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";
// 当打包编译的时候 如果不写后缀名 vue 编译失败,
// 解决办法
export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style scoped>
h1 {
  color: pink;
}
</style>