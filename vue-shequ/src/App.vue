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
.panel {
  width: 65vw;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
}
.panel .panel-head {
  padding: 10px;
  background-color: #f6f6f6;
}
.panel .panel-head .panel-head-title {
  color: #1c6132;
}
</style>
