<template>
  <div class="paycheck">
    <div class="paycheck-inner container">
      <div class="paycheck-head">
        <Procedure />
      </div>
      <div class="address-wrap">
        <Address />
      </div>
      <div class="checklist-wrap">
        <CheckList />
      </div>
      <div class="payment"></div>
    </div>
  </div>
</template>

<script>
import Procedure from "./Procedure";
import Address from "./Address";
import CheckList from "./CheckList";

import { mapMutations } from "vuex";
export default {
  name: "paycheck",
  components: {
    Procedure,
    Address,
    CheckList
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
  background-image: url("./../assets/img/style-bg.png");
  background-repeat: repeat;
}
.paycheck-inner {
  padding: 24px 50px 80px;
  background-color: #fff;
  background-image: url("./../assets/img/cart-top.png");
  background-repeat: no-repeat;
}
.paycheck-head {
  padding-bottom: 70px;
}
.address-wrap {
  padding-bottom: 60px;
}
</style>
