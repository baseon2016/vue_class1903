<template>
  <div class="pay-methods-wrap">
    <div class="pay-methods df">
      <p class="methods-title">选择支付方式</p>
      <div class="methods-content df">
        <div>
          <Switcher :active="payMethod==='ali'" :text="''" @click.native="transPayMethod('ali')">
            <img src="./../../assets/img/pay/alipay.png" />
          </Switcher>
        </div>
        <div>
          <Switcher
            :active="payMethod==='weChat'"
            :text="''"
            @click.native="transPayMethod('weChat')"
          >
            <img src="./../../assets/img/pay/wechatpay.png" />
          </Switcher>
        </div>
      </div>
    </div>
    <div class="pay-btn df">
      <router-link :to="$publicUrl+'/pay/scan'">
        <span class="btn-route click-bar">付款</span>
      </router-link>
    </div>
  </div>
</template>
 
<script>
import Switcher from "./../Switcher";
import { mapState, mapMutations } from "vuex";
export default {
  name: "paymethods",
  components: {
    Switcher
  },
  computed: {
    ...mapState({
      payMethod: state => state.pay.payMethod
    })
  },
  methods: {
    ...mapMutations(["transPayMethod"])
  }
};
</script>

<style>
.pay-methods {
  padding: 20px 0;
  border-top: 1px solid #babec9;
  border-bottom: 2px solid #000;
}
.pay-methods .methods-title {
  margin-right: 10px;
}
.pay-methods .methods-content div + div {
  margin-left: 10px;
}
.pay-methods img {
  vertical-align: middle;
}
.pay-btn {
  padding-top: 30px;
  justify-content: flex-end;
}
</style>
