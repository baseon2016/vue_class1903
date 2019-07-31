<template>
  <div class="paycheck mainblock-bg">
    <div class="paycheck-inner mainblock-inner-bg container">
      <div class="mainblock-head">
        <Procedure />
      </div>
      <div class="address-wrap">
        <Address />
      </div>
      <div class="checklist-wrap">
        <CheckList />
      </div>
      <div class="payment-wrap">
        <Payment />
      </div>
      <div class="note-wrap">
        <div class="note-title">
          <h3>备注</h3>
        </div>
        <textarea class="note" rows="10"></textarea>
      </div>
      <div class="cal-paycheck-wrap">
        <CalPaycheck />
      </div>
      <div class="sub-check df">
        <router-link :to="$publicUrl+'/pay'">
          <span class="btn-route click-bar">提交订单</span>
        </router-link>
      </div>
    </div>
    <NewAddress />
  </div>
</template>

<script>
import Procedure from "./../Procedure";
import Address from "./Address";
import CheckList from "./CheckList";
import Payment from "./Payment";
import CalPaycheck from "./CalPaycheck";
import NewAddress from "./NewAddress";

import { mapState, mapMutations } from "vuex";
export default {
  name: "paycheck",
  components: {
    Procedure,
    Address,
    CheckList,
    Payment,
    CalPaycheck,
    NewAddress
  },
  computed: {
    ...mapState
  },
  methods: {
    ...mapMutations(["transProcedure"])
  },

  created() {
    this.transProcedure("paycheck");
  }
};
</script>

<style>
.paycheck {
  position: relative;
}
.address-wrap {
  padding-bottom: 60px;
}
.cal-paycheck-wrap {
  padding: 50px 0;
}

.note-wrap .note-title {
  padding: 20px 0;
}
.note {
  font-size: 18px;
  width: 100%;
  resize: none;
  border-top: 2px solid #000;
}
.sub-check {
  justify-content: flex-end;
}
</style>
