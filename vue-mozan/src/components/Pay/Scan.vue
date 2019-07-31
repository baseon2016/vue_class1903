<template>
  <div class="scan df">
    <div class="scan-title">
      <h3>{{payMethod==='ali'?'支付宝支付':'微信支付'}}</h3>
    </div>
    <div class="scan-info">
      <p>
        距离二维码过期还剩
        <span>42</span>秒
        <br />过期后请刷新页面重新获取二维码
      </p>
      <img src="./../../assets/img/pay/paycode.png" />
      <router-link :to="$publicUrl + '/pay/paymethods'">
        <span class="btn-route click-bar" @click="scanTipping">
          请使用{{payMethod==='ali'?'支付宝':'微信'}}扫一扫
          <br />扫描二维码支付
        </span>
      </router-link>
    </div>
    <div>
      <img src="./../../assets/img/pay/indicator.png" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "scan",
  computed: {
    ...mapState({
      payMethod: state => state.pay.payMethod
    })
  },
  methods: {
    ...mapMutations(["scanTipping"])
  }
};
</script>

<style>
.scan {
  align-items: flex-start;
  border-top: 2px solid #000;
  padding: 30px 0;
}
.scan .scan-title {
  margin-right: 143px;
}
.scan h3 {
  font-size: 26px;
}
.scan .scan-info {
  text-align: center;
  font-size: 14px;
  margin-right: 146px;
}
.scan-info p span {
  color: #ee0000;
}
.scan-info img {
  display: block;
  margin: 20px 0;
}
.scan-info span.btn-route {
  width: 234px;
  font-size: 14px;
  line-height: 1.4;
  padding: 11px 0;
  /* height: 60px; */
}
</style>
