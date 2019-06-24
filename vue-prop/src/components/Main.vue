<template>
  <div class="main">
    <Button color="gray" text="显示更多" type="more"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "mainSection",
  components: {
    Button
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 300px;
  background-color: teal;
  text-align: center;
}
</style>
