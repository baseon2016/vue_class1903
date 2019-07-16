<template>
  <div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  created() {
    axios
      .post("/api/user/login?username=baseon&password=5201314")
      .then(res => console.log(res));
  }
};
</script>

<style>
</style>
