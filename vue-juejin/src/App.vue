<template>
  <div>
    <div class="title">
      <h1>
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" />
      </h1>
      <div class="nav">
        <h3>首页</h3>
        <h3>沸点</h3>
        <h3>话题</h3>
      </div>
    </div>

    <Topics />
  </div>
</template>

<script>
import Topics from "./components/Topics";
export default {
  name: "app",
  components: {
    Topics
  }
};
</script>

<style>
</style>
