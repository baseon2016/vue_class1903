<template>
  <div class="cart">
    <div class="cart-inner container">
      <div class="cart-head">
        <Procedure />
      </div>
      <div class="cart-main">
        <CartList />
      </div>
      <div class="cart-bottom">
        <CartFoot />
      </div>
    </div>
    <Login />
  </div>
</template>

<script>
import Procedure from "./Procedure";
import CartList from "./CartList";
import CartFoot from "./CartFoot";
import Login from "./Login";
export default {
  name: "cart",
  components: {
    Procedure,
    CartList,
    CartFoot,
    Login
  },

  created() {
    console.log(this.order);
  }
};
</script>

<style>
.cart {
  background-image: url("./../assets/img/style-bg.png");
  background-repeat: repeat;
}
.cart-inner {
  padding: 24px 50px 80px;
  background-color: #fff;
  background-image: url("./../assets/img/cart-top.png");
  background-repeat: no-repeat;
}
.cart-head {
  padding-bottom: 70px;
}
.cart-bottom {
  padding-top: 50px;
}
</style>
