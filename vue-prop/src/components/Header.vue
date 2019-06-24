<template>
  <div class="header">
    <Button color="hotpink" text="登录"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "topSection",
  components: {
    Button
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
