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
          <span>{{item.qty}}</span>
        </li>
      </ul>
      <span>Total:￥</span>
      <span>
        {{productCart.reduce(function(rst,item){
        return rst+item.price*item.qty
        },0)}}
      </span>
    </div>
    <div v-else>请添加数据到购物车</div>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    productCart() {
      return this.$store.getters.productCart;
    }
  }
};
</script>

<style>
</style>
