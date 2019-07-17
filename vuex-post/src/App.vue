<template>
  <div>
    <h1>vuex小例子</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style>
</style>
