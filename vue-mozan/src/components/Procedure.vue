<template>
  <div class="procedure-wrap df">
    <div class="left">
      <h3 v-if="procedure==='cart'">
        购物车
        <span>
          [
          <span class="showQty">{{totalQty}}</span>件]
        </span>
      </h3>
      <h3 v-if="procedure==='paycheck'">填写订单</h3>
      <h3 v-if="procedure==='pay'">收银台</h3>
    </div>
    <div class="procedure df">
      <div :class="{active:procedure==='cart'?true:false}">
        <span>购物车</span>
        <div class="line"></div>
      </div>
      <div :class="{active:procedure==='paycheck'?true:false}">
        <span>填写订单</span>
        <div class="line"></div>
      </div>
      <div :class="{active:procedure==='pay'?true:false}">
        <span>付款,购买成功</span>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "procedure",
  computed: {
    ...mapState({
      procedure: state => state.cart.procedure,
      order: state => state.order.order
    }),
    ...mapGetters(["totalQty"])
  }
};
</script>

<style>
.procedure-wrap {
  justify-content: space-between;
  overflow: hidden;
}
.procedure-wrap .left {
  padding: 15px 20px;
  border-left: 5px solid #000;
}
.procedure-wrap h3 {
  font-weight: normal;
  font-size: 30px;
}
.procedure-wrap h3 span {
  font-size: 24px;
}
.procedure-wrap h3 span.showQty {
  color: #f50101;
}
.procedure-wrap .line {
  background-color: #000;
}
.procedure-wrap .procedure {
  width: 290px;
  justify-content: space-between;
}
.procedure-wrap .procedure span {
  font-size: 18px;
  line-height: 2;
}
.procedure-wrap .active span {
  font-weight: bold;
}
.procedure-wrap .active .line {
  height: 5px;
}
</style>
