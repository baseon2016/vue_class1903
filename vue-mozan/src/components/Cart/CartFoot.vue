<template>
  <div class="cart-foot df">
    <div class="cart-check df">
      <div class="check-func df">
        <div class="func-group df">
          <div class="group-btn df">
            <div class="df">
              <label
                :class="{'custome-label':true,checked:checkAll}"
                @click="transCheckAll"
              >{{checkAll?'√':''}}</label>
              <span>全选</span>
            </div>
            <div class="bin" @click="delSelected">
              <img src="./../../assets/img/bin.png" />
              <span>删除</span>
            </div>
          </div>
          <div class="to-wish">
            <img src="./../../assets/img/wish.png" />
            <span>转到愿望单</span>
          </div>
        </div>
        <div class="check-qty">
          共
          <span>{{cart.length}}</span> 件产品,已选择
          <span>{{selectNum}}</span> 件
        </div>
      </div>
      <div class="total df">
        <div>
          <p>
            合计:
            <br />[不含运费]
          </p>
        </div>
        <div class="total-bill">
          <span>￥</span>
          <span>{{totalCost}}</span>
        </div>
      </div>
    </div>
    <div class="cart-route">
      <span class="btn-route click-bar" @click="startVerify({$router,$publicUrl})">去结算</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "cartfoot",
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
      checkAll: state => state.cart.checkAll
    }),
    ...mapGetters(["totalCost", "selectNum"])
  },
  methods: {
    ...mapMutations(["transCheckAll", "delSelected", "startVerify"])
  }
};
</script>

<style>
.cart-foot .cart-check {
  background-color: #2b2e33;
  flex-grow: 1;
  justify-content: space-between;
}
.cart-check .check-func {
  font-size: 12px;
  color: #fff;
}
.check-func .check-qty {
  line-height: 20px;
  margin: 20px 0;
  padding: 0 20px;
  border-left: 2px solid #707378;
}
.check-qty span {
  color: #fdd900;
}
.check-func .func-group {
  width: 265px;
  justify-content: space-around;
}
.func-group .custome-label {
  margin-right: 10px;
  border-color: #fff;
}
.func-group .group-btn {
  width: 124px;
  justify-content: space-between;
}
.group-btn .bin {
  cursor: pointer;
  user-select: none;
}
.group-btn .bin span {
  margin-left: 5px;
}
.func-group .to-wish span {
  margin-left: 5px;
}
.cart-check .total {
  margin-right: 20px;
  line-height: 60px;
}
.cart-check .total p {
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  text-align: right;
}
.cart-check .total .total-bill {
  font-size: 32px;
  color: #fdd900;
}
.cart-foot .cart-route {
  flex-shrink: 0;
}
</style>
