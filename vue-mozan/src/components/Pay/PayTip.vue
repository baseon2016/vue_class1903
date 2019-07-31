<template>
  <div :class="{'paytip-wrap':true,tipping:tipping}">
    <div class="tip">
      <div class="tip-inner">
        <div class="tip-top df">
          <span>收银台</span>
          <span class="click-bar" @click="closeTipping">x</span>
        </div>
        <div class="tip-content">
          <div class="tip-text">
            <p>
              请您在新打开的网上银行页面进行支付
              <br />支付完成之前请不要关闭该窗口
            </p>
          </div>
          <div class="tip-btn df">
            <router-link :to="$publicUrl+'/pay/paysuccess'" @click.native="closeTipping">
              <span class="btn-route click-bar">已完成支付</span>
            </router-link>
            <router-link :to="$publicUrl+'/pay'" @click.native="closeTipping">
              <span class="btn-route click-bar">支付遇到问题</span>
            </router-link>
          </div>
        </div>
        <div class="tip-foot">
          <router-link :to="$publicUrl+'/pay'" @click.native="closeTipping">
            <span class="click-bar">选择其他支付方式</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "paytip",
  computed: {
    ...mapState({
      tipping: state => state.pay.tipping
    })
  },
  methods: {
    ...mapMutations(["closeTipping"])
  }
};
</script>

<style>
.paytip-wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
}
.paytip-wrap.tipping {
  display: block;
}
.paytip-wrap .tip {
  width: 690px;
  height: 420px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.tip .tip-inner {
  padding: 0 20px;
  width: 100%;
}
.tip .tip-top {
  justify-content: space-between;
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid #000;
}
.tip-content {
  padding: 75px 0;
}
.tip-content .tip-text {
  font-size: 12px;
  text-align: center;
  padding-bottom: 50px;
}
.tip-content .tip-btn {
  padding: 0 100px;
  justify-content: space-between;
}
.tip-content .tip-btn span {
  width: 210px;
  line-height: 52px;
  background-color: #2b2e33;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.tip-foot {
  color: #02a0ea;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
  border-top: 2px solid #000;
}
</style>
