<template>
  <div>
    <div class="pay-content">
      <div class="pay-info df">
        <div>
          <h3>订单提交成功，请您尽快付款！</h3>
          <p>
            请您在订单提交后
            <span>24小时</span>内完成支付,否则订单会自动取消。
          </p>
        </div>
        <div>
          <span>应付金额:</span>
          <span class="actural-pay">￥{{acturalPay.toFixed(2)}}</span>
        </div>
      </div>
      <div class="order-info df">
        <div>
          <h3>订单号:12345678912345</h3>
        </div>
        <div>
          <div class="order-contact df">
            <p>
              <img src="./../../assets/img/address/addressee.png" />
              {{orderAddress.addressee}}
            </p>
            <p class="mg-l-15">
              <img src="./../../assets/img/address/tel.png" />
              {{orderAddress.phone}}
            </p>
          </div>
          <p>
            <img src="./../../assets/img/address/address.png" />
            {{orderAddress.address}}
          </p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "paycontent",
  computed: {
    ...mapGetters(["acturalPay", "orderAddress"])
  }
};
</script>

<style>
.pay-content .pay-info {
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  border-bottom: 2px solid #000;
}
.pay-content .order-info {
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.pay-content h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}
.pay-content .pay-info p {
  font-size: 12px;
}
.pay-content .order-info p {
  font-size: 14px;
}
.pay-content .pay-info p span {
  color: #f40000;
}
.pay-info .actural-pay {
  font-size: 24px;
  color: #ee0000;
}
.order-info .order-contact {
  justify-content: flex-end;
}
</style>
