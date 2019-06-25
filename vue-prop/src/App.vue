<template>
  <div>
    <Header/>
    <Main/>
    <Button/>
  </div>
</template>

<script>
import Button from "./components/Button";
import Main from "./components/Main";
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Button,
    Main,
    Header
  }
};
</script>

<style>
</style>
