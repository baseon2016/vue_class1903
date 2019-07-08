<template>
  <div class="footer">
    <div class="cart">
      <img
        src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/c6896f9806bdcb2399cb680fb5dec8c0.png"
      />
      <!-- <img
          src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/03098cb323a0263fdbbb102c696433c5.png"
      />-->
    </div>
    <div>
      <span>另需配送费￥2.5</span>
      <span>{{this.cartBill}}</span>
    </div>

    <p>￥10起送</p>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {};
  },
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    cartBill() {
      let result = 0;
      this.cartItems.forEach(
        element => (result = result + element.price * element.num)
      );
      return result;
    }
  }
};
</script>

<style>
.footer {
  /* flex-shrink: 0; */
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: #3b3b3c;
}
.footer .cart {
  width: 50px;
}
.footer .cart img {
  display: block;
  width: 100%;
}
</style>
