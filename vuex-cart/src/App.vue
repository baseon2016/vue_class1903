<template>
  <div>
    <h1>小测试</h1>
    <Products />
    <hr />
    <Cart />
  </div>
</template>

<script>
import Products from "./components/Products";
import Cart from "./components/Cart";
export default {
  name: "app",
  components: {
    Products,
    Cart
  },

  created() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getCart");
  }
};
</script>

<style>
</style>
