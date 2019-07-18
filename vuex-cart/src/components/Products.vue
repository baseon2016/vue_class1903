<template>
  <div>
    <ul v-if="productCart&&products">
      <li v-for="item in products" :key="item.id">
        名称:
        <span>{{item.title}}</span>--
        价格:
        <span>{{item.price}}</span>--
        库存:
        <span>{{item.inventory}}</span>
        <button
          :disabled="productCart.find(ele => ele.id === id).qty >=
        products.find(ele => ele.id === id).inventory?true:false"
          @click="addCart(item.id)"
        >添加到购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "products",
  computed: {
    products() {
      return this.$store.state.products;
    },
    productCart() {
      return this.$store.getters.productCart;
    }
  },
  methods: {
    addCart(id) {
      if (this.$store.getters.productCart.every(ele => ele.id != id)) {
        this.$store.dispatch("addCart", id);
      } else {
        this.$store.dispatch("addCartQty", id);
      }
    }
  }
};
</script>

<style>
</style>
