<template>
  <div class="cal">
    <div class="cal-title df">
      <span>数量</span>
      <span>单价</span>
      <span>小计</span>
      <span>优惠</span>
      <span>运费</span>
      <span>实际应付</span>
    </div>
    <div class="cal-content df">
      <div>
        <span v-for="item in calpay" :key="item.productId">{{item.qty}}</span>
      </div>
      <div>
        <span>*</span>
      </div>
      <div>
        <span v-for="item in calpay" :key="item.productId">￥{{item.price.toFixed(2)}}</span>
      </div>
      <div>
        <span>=</span>
      </div>
      <div>
        <span v-for="item in calpay" :key="item.productId">￥{{item.subtotal.toFixed(2)}}</span>
      </div>
      <div>
        <span>-</span>
      </div>
      <div>
        <span>￥{{coupon.toFixed(2)}}</span>
      </div>
      <div>
        <span>+</span>
      </div>
      <div>
        <span>￥{{shippingCost.toFixed(2)}}</span>
      </div>
      <div>
        <span>=</span>
      </div>
      <div>
        <span class="actural-pay">￥{{acturalPay.toFixed(2)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "calpaycheck",
  computed: {
    ...mapState({
      coupon: state => state.calpay.coupon
    }),
    ...mapGetters(["calpay", "shippingCost", "acturalPay"])
  }
};
</script>

<style>
.cal span {
  display: block;
}
.cal .cal-title {
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
  justify-content: space-between;
}
.cal .cal-content {
  line-height: 50px;
  justify-content: space-between;
}
.cal-content .actural-pay {
  font-size: 32px;
  color: #ee0000;
}
</style>
