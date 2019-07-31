<template>
  <div>
    <HomeTop />
    <router-view></router-view>
    <HomeFoot />
  </div>
</template>

<script>
import HomeTop from "./../HomeTop";
import HomeFoot from "./../HomeFoot";
export default {
  name: "home",
  components: {
    HomeTop,
    HomeFoot
  }
};
</script>

<style>
.container {
  width: 1200px;
  margin: 0 auto;
}
.df {
  display: flex;
  align-items: center;
}
</style>
