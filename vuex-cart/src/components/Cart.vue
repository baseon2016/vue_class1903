<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div v-if="productCart.length">
      <ul>
        <li v-for="item in productCart" :key="item.id">
          名称:
          <span>{{item.title}}</span>--
          价格:
          <span>{{item.price}}</span>x
          <span>
            <button @click="changeCart(item.id,'del')">-</button>
            {{item.qty}}
            <button
              :disabled="productCart.every(ele => ele.id != item.id)?false:productCart.find(ele => ele.id === item.id).qty >=
        products.find(ele => ele.id === item.id).inventory?true:false"
              @click="changeCart(item.id,'add')"
            >+</button>
          </span>
        </li>
      </ul>
      <span>Total:￥</span>
      <span>{{total}}</span>
    </div>
    <div v-else>请添加数据到购物车</div>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    products() {
      return this.$store.state.products;
    },
    productCart() {
      return this.$store.getters.productCart;
    },
    total() {
      return this.$store.getters.total.toFixed(2);
    }
  },
  methods: {
    changeCart(id, foo) {
      this.$store.dispatch("changeCartQty", { id, foo });
    }
  }
};
</script>

<style>
</style>
