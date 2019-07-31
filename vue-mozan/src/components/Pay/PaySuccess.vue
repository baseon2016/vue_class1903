<template>
  <div class="paysuccess df">
    <div class="paysuccess-side">
      <img src="./../../assets/img/pay/paysucess.png" alt />
    </div>
    <div class="paysuccess-content">
      <div class="paysuccess-title">
        <h3>支付成功！</h3>
      </div>
      <div class="paysuccess-text df">
        <div class="paysuccess-info">
          <span>订单号:12345678912345</span>
          <span>成功支付:￥{{acturalPay.toFixed(2)}}</span>
        </div>
        <div class="paysuccess-func df">
          <router-link :to="$publicUrl+'/'">
            <span class="btn-route click-bar">继续逛逛</span>
          </router-link>
          <router-link :to="$publicUrl+'/paycheck'">
            <span class="btn-route click-bar">查看订单</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "paysuccess",
  computed: {
    ...mapGetters(["acturalPay"])
  }
};
</script>

<style>
.paysuccess-side {
  flex-shrink: 0;
}
.paysuccess-content {
  margin-left: 30px;
  flex-grow: 1;
}
.paysuccess-content h3 {
  font-size: 26px;
}
.paysuccess-content .paysuccess-title {
  padding: 20px 0;
  border-bottom: 2px solid #000;
}
.paysuccess-content .paysuccess-text {
  justify-content: space-between;
  padding: 20px 0;
}
.paysuccess-text .paysuccess-info span {
  display: block;
  font-size: 14px;
  line-height: 1.5;
  font-weight: bold;
}
.paysuccess-text .paysuccess-func a + a {
  margin-left: 10px;
}
</style>
