<template>
  <div class="presell">
    <div class="presell-inner">
      <div class="presell-info df">
        <EtaClock />
        <Order />
      </div>
      <div class="order-btn">
        <span @click="canOrder({$router,$publicUrl})">立即预购</span>
      </div>
    </div>
    <img src="./../../assets/img/goods1.png" />
    <img src="./../../assets/img/goods2.png" />
  </div>
</template>

<script>
import EtaClock from "./EtaClock";
import Order from "./Order";
import { mapMutations } from "vuex";
export default {
  name: "presell",
  components: {
    EtaClock,
    Order
  },
  methods: {
    ...mapMutations(["canOrder"])
  }
};
</script>

<style>
.presell {
  background-image: url("./../../assets/img/presell-bg.png"),
    url("./../../assets/img/goods1.png"), url("./../../assets/img/goods2.png");
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 0 0, 0 581px, 0 2687px;
  padding: 30px 50px 0;
}
.presell .presell-info {
  align-items: flex-start;
  padding-bottom: 21px;
  border-bottom: 2px solid #707378;
}
.presell .order-btn {
  width: 100%;
  padding: 20px 0;
  margin-bottom: 84px;
  border-bottom: 2px solid #4f4f4f;
}
.order-btn span {
  display: block;
  width: 100%;
  border: 3px solid #fdd900;
  border-radius: 10px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  line-height: 90px;
  color: #fdd900;
  cursor: pointer;
  user-select: none;
}
.presell > img {
  display: block;
  width: 100%;
}
</style>
