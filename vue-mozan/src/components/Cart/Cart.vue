<template>
  <div class="cart mainblock-bg">
    <div class="cart-inner mainblock-inner-bg container">
      <div class="mainblock-head">
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
import Procedure from "./../Procedure";
import CartList from "./CartList";
import CartFoot from "./CartFoot";
import Login from "./Login";
import { mapMutations } from "vuex";
export default {
  name: "cart",
  components: {
    Procedure,
    CartList,
    CartFoot,
    Login
  },

  methods: {
    ...mapMutations(["transProcedure"])
  },
  created() {
    this.transProcedure("cart");
  }
};
</script>

<style>
.mainblock-bg {
  background-image: url("./../../assets/img/style-bg.png");
  background-repeat: repeat;
}
.mainblock-inner-bg {
  padding: 24px 50px 80px;
  background-color: #fff;
  background-image: url("./../../assets/img/cart-top.png");
  background-repeat: no-repeat;
}
.mainblock-head {
  padding-bottom: 70px;
}
.cart-bottom {
  padding-top: 50px;
}
</style>
