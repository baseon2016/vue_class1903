<template>
  <div class="payment df">
    <div class="df">
      <span class="options">支付方式</span>
      <span
        :class="{'options-item':true,paymode:true,active:options.payMode}"
        @click="selectPayMode"
      >
        在线支付
        <label v-show="options.payMode" class="custome-label checked useaddr">√</label>
      </span>
    </div>
    <div class="df">
      <span class="options">物流方式</span>
      <span
        :class="{'options-item':true,logisticmode:true,active:options.logisticMode}"
        @click="selectLogisticMode"
      >
        普通快递
        <label v-show="options.logisticMode" class="custome-label checked useaddr">√</label>
      </span>
    </div>
    <div class="df">
      <span class="options">发票信息</span>
      <span
        :class="{'options-item':true,receipt:true,active:!options.receipt}"
        @click="selectReceipt(false)"
      >
        不开发票
        <label v-show="!options.receipt" class="custome-label checked useaddr">√</label>
      </span>
      <span
        :class="{'options-item':true,receipt:true,active:options.receipt}"
        @click="selectReceipt(true)"
      >
        开发票
        <label v-show="options.receipt" class="custome-label checked useaddr">√</label>
      </span>
      <input class="receipt-for" type="text" placeholder="请输入个人/单位名称" v-model="receiptFor" />
      <span class="save-btn click-bar">保存</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "payment",
  methods: {
    ...mapMutations([
      "selectPayMode",
      "selectLogisticMode",
      "selectReceipt",
      "receiptForText"
    ])
  },
  computed: {
    ...mapState({
      options: state => state.paycheck.options
    }),
    // 数据相互存在关系的情况,即options.receipt=false时，receiptFor应该为空,options.receipt=true时,receiptFor不能为空 如何设计vuex
    receiptFor: {
      get() {
        return this.$store.state.paycheck.receiptFor;
      },
      set(text) {
        this.receiptForText(text);
      }
    }
  }
};
</script>

<style>
.payment {
  padding: 30px 0;
  border-bottom: 2px solid #b8beca;
  justify-content: space-between;
}
.payment .options {
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}
.payment .options-item {
  display: block;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  border: 3px solid #babec9;
  position: relative;
  cursor: pointer;
  user-select: none;
}
.payment .options-item.active {
  border-color: #fdd900;
}
.options-item.paymode,
.options-item.logisticmode {
  width: 132px;
}
.options-item.receipt {
  width: 102px;
  margin-right: 10px;
}
.payment .options-item label.useaddr {
  width: 19px;
  height: 19px;
  line-height: 15px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
}
.payment .receipt-for {
  font-size: 12px;
  width: 175px;
  line-height: 40px;
  padding-left: 12px;
  margin-right: 5px;
}
.payment .save-btn {
  display: block;
  width: 56px;
  font-size: 14px;
  line-height: 46px;
  text-align: center;
  color: #000;
  background-color: #fdd900;
}
</style>
