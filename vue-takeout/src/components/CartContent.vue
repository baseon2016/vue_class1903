<template>
  <div v-show="isShowCart" class="cart-wrap">
    <div @click="hideCart" class="cart-mask"></div>
    <div class="cart-content">
      <div class="cart-head">
        <span>购物车</span>
        <span @click="$emit('clearCart',hideCart)">清空购物车</span>
      </div>
      <div class="cart-list">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <span>{{item.name}}</span>
          <span>{{(item.price*item.num).toFixed(2)}}</span>
          <div>
            <button @click="$emit('delCart',item,hideCart)">-</button>
            <span>{{item.num}}</span>
            <button @click="$emit('addCart',item)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartcontent",
  props: ["cartItems", "isShowCart", "hideCart"]
};
</script>

<style>
.cart-func .cart-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 8;
  background: rgba(0, 0, 0, 0.5);
}

.cart-func .cart-wrap .cart-content {
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 8vh;
  z-index: 9;
  background-color: #fff;
  max-height: 50vh;
}
.cart-func .cart-wrap .cart-head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
.cart-func .cart-wrap .cart-list .cart-item {
  display: flex;
  justify-content: space-around;
  padding: 3px 0;
  border-bottom: 1px solid #ccc;
}
</style>
