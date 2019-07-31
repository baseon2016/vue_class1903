<template>
  <div class="addtocart">
    <div class="addtocart-inner container">
      <div>
        <img src="./../assets/img/addtocart/addtocart.png" />
      </div>
      <div class="orderitem df">
        <div class="item-title df">
          <img src="./../assets/img/banner-pic1.png" />
          <h3>{{order.title}}</h3>
        </div>
        <div class="item-info">
          <div>
            <span>款式:</span>
            <span>{{order.model}}</span>
          </div>
          <div>
            <span>尺码:</span>
            <span>{{order.size}}</span>
          </div>
          <div>
            <span>数量:</span>
            <span>{{order.qty}}</span>
          </div>
        </div>
        <div class="confirm df">
          <a class="return" @click="$router.back()">返回</a>
          <router-link :to="$publicUrl+'/cart'" class="check" @click="startProcedure('cart')">去购物车结算</router-link>
        </div>
      </div>
      <div class="block">
        <div class="block-title df">
          <h3>您可能还需要</h3>
          <div class="line"></div>
        </div>
        <div class="block-content df">
          <img src="./../assets/img/addtocart/mayneed.png" />
          <img src="./../assets/img/addtocart/mayneed.png" />
          <img src="./../assets/img/addtocart/mayneed.png" />
          <img src="./../assets/img/addtocart/mayneed.png" />
          <img src="./../assets/img/addtocart/mayneed.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "addtocart",
  computed: {
    ...mapState({
      order: state => state.order.order
    })
  },
  methods: {
    ...mapMutations(["transProcedure"]),
    startProcedure(step) {
      this.transProcedure(step);
    }
  }
};
</script>

<style>
.addtocart {
  background-image: url("./../assets/img/style-bg.png");
  background-repeat: repeat;
}
.addtocart-inner {
  padding-bottom: 120px;
  background-color: #fff;
}
.addtocart .orderitem {
  padding: 10px;
  border-top: 2px solid #babec9;
  border-bottom: 2px solid #babec9;
}
.addtocart .orderitem .item-title {
  flex-shrink: 0;
}
.addtocart .orderitem .item-title img {
  width: 96px;
}
.addtocart .orderitem .item-title h3 {
  font-size: 18px;
  font-weight: normal;
  max-width: 235px;
  margin-left: 10px;
  margin-right: 20px;
}
.orderitem {
  margin-top: 20px;
  margin-bottom: 80px;
}
.orderitem .item-info {
  border-left: 2px solid #fdd900;
  padding-left: 20px;
  flex-grow: 1;
}
.orderitem .item-info span {
  font-size: 12px;
  color: #6f7277;
}

.orderitem .confirm {
  flex-shrink: 0;
}
.orderitem .confirm a {
  display: block;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  line-height: 46px;
}
.orderitem .confirm a + a {
  margin-left: 10px;
}
.orderitem .confirm a.return {
  width: 132px;
  height: 46px;
  background-color: #2b2e33;
  color: #fff;
}
.orderitem .confirm a.check {
  width: 210px;
  height: 46px;
  background-color: #fdd900;
  color: #000;
}
.orderitem .confirm {
  flex-shrink: 0;
}
.block .block-title {
  margin-bottom: 30px;
}
.block .block-title h3 {
  flex-shrink: 0;
  font-size: 18px;
  font-weight: normal;
  color: #2c2d32;
  margin-right: 10px;
}
.block .block-title .line {
  background-color: #fdd900;
  flex-grow: 1;
}
.block .block-content {
  justify-content: space-between;
}
</style>
