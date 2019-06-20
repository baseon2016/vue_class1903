<template>
  <div>
    <h1>hello world</h1>
    <Button/>
  </div>
</template>

<script>
import Button from "./components/Button";
export default {
  //小名  不能和html的标签一样 一般都是小写 一般是必须的
  name: "app",
  components: {
    Button
  }
};
</script>

<style>
</style>
