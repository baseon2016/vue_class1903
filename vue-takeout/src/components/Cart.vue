<template>
  <div class="cart-func">
    <div class="footer">
      <div class="cart">
        <img
          v-if="!cartItems.length"
          src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/c6896f9806bdcb2399cb680fb5dec8c0.png"
        />
        <img
          v-else
          @click="showCart"
          src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/03098cb323a0263fdbbb102c696433c5.png"
        />
      </div>
      <div class="expense">
        <span>另需配送费￥2.5</span>
        <span v-if="cartItems.length" @click="showCart" class="total">￥{{this.cartBill}}</span>
      </div>
      <div class="pay">
        <p v-if="!cartItems.length">￥10起送</p>
        <button v-else-if="30-cartBill<=0" class="ispay">去结算</button>
        <span v-else>差￥{{30-cartBill}}起送</span>
      </div>
    </div>
    <CartContent
      :cartItems="cartItems"
      :isShowCart="isShowCart"
      :hideCart="hideCart"
      @addCart="addCart"
      @delCart="delCart"
      @clearCart="clearCart"
    />
  </div>
</template>

<script>
// 数组reduce方法小例
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const xxx = array.reduce((rst, ele) => {
//   if (ele % 2) {
//     rst.push(ele);
//   }
//   return rst;
// }, []);
// console.log(xxx);
import CartContent from "./CartContent";
export default {
  name: "cart",
  components: {
    CartContent
  },
  data() {
    return {
      isShowCart: false
    };
  },
  props: {
    cartItems: {
      type: Array,
      required: true
    },
    addCart: {
      type: Function,
      required: true
    },
    delCart: {
      type: Function,
      required: true
    },
    clearCart: {
      type: Function,
      required: true
    }
  },
  computed: {
    cartBill() {
      // let result = 0;
      // this.cartItems.forEach(
      //   element => (result = result + element.price * element.num)
      // );
      // return result.toFixed(2);
      // 数组的reduce方法
      // reduce 函数接收两个参数 第一个参数是函数，该函数至少接收两个参数 第一个参数代表最终结果（reduce的返回值） 该函数必须返回一个值作为下次运行的最终结果初始值
      // 第二个参数是最终结果（reduce的返回值）的初始值
      return this.cartItems.reduce((res, ele) => res + ele.price * ele.num, 0);
    }
  },
  methods: {
    showCart() {
      this.isShowCart = true;
    },
    hideCart() {
      this.isShowCart = false;
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
  height: 8vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  color: #999;
  background-color: #3b3b3c;
}
.footer .cart {
  width: 50px;
  flex-shrink: 0;
  margin: 0 15px;
  position: relative;
  top: -10px;
}
.footer .cart img {
  display: block;
  width: 100%;
}
.footer .expense {
  flex-grow: 1;
}
.footer .expense span {
  display: block;
  font-size: 16px;
}
.footer .expense span.total {
  font-size: 20px;
}
.footer .pay {
  flex-shrink: 0;
  width: 25vw;
  height: 100%;
  line-height: 8vh;
  text-align: center;
}
.pay button.ispay {
  border: 0;
  width: 100%;
  height: 100%;
  background-color: #f8c74e;
}
</style>
