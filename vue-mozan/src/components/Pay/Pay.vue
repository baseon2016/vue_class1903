<template>
  <div class="pay mainblock-bg">
    <div class="pay-inner mainblock-inner-bg container">
      <div class="mainblock-head">
        <Procedure />
      </div>
      <router-view></router-view>
    </div>
    <PayTip />
  </div>
</template>

<script>
import Procedure from "./../Procedure";
import PayTip from "./PayTip";
import { mapMutations } from "vuex";
export default {
  name: "pay",
  components: {
    Procedure,
    PayTip
  },

  methods: {
    ...mapMutations(["transProcedure"])
  },
  created() {
    this.transProcedure("pay");
  }
};
</script>

<style>
.pay-inner {
  padding-bottom: 280px;
}
</style>
