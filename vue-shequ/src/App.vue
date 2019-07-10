<template>
  <div class="shequ">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
.shequ {
  background-color: #e1e1e1;
}
.container {
  width: 90%;
  margin: 0 auto;
}
</style>
