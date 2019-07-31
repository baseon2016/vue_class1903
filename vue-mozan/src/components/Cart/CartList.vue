<template>
  <div class="cart-list">
    <div class="list-title">
      <ul class="df titles">
        <li class="df check">
          <label
            :class="{'custome-label':true,checked:checkAll}"
            @click="transCheckAll"
          >{{checkAll?'√':''}}</label> 全选
        </li>
        <li class="product">商品</li>
        <li class="item-price">单价</li>
        <li class="quantity">数量</li>
        <li class="cost">小计</li>
        <li class="del">操作</li>
      </ul>
    </div>
    <div class="list-item">
      <ul>
        <li
          :class="{df:true, 'item-block':true,unsell:item.ban||item.storage===0}"
          v-for="item in cart"
          :key="item.productId"
        >
          <div class="check">
            <label
              :class="{'custome-label':true,checked:item.isCheck}"
              @click="transCheck(item)"
            >{{item.isCheck?'√':''}}</label>
          </div>
          <div class="item-block-main df">
            <div class="item-info product df">
              <img src="./../../assets/img/banner-pic1.png" />
              <img
                v-if="item.ban||item.storage===0"
                :src="item.ban?require('./../../assets/img/ban.png'):item.storage===0?require('./../../assets/img/sellout.png'):''"
                class="warn-icon"
              />
              <!-- 上面使用三目运算require引入图片的方式 -->
              <div class="info-text">
                <h3>{{item.title}}</h3>
                <span>款式:{{item.model}}</span>
                <span>尺寸:{{item.size}}</span>
              </div>
            </div>
            <div class="item-price">
              <span>￥{{item.price.presell.toFixed(2)}}</span>
            </div>
            <div class="quantity df">
              <span
                :class="{btn:true,disable:itemListBtns.find(ele=>ele.productId===item.productId).disableIncrease}"
                @click="transQty({type:'increase',item})"
              >+</span>
              <span>{{item.qty}}</span>
              <span
                :class="{btn:true,disable:itemListBtns.find(ele=>ele.productId===item.productId).disableDecrease}"
                @click="transQty({type:'decrease',item})"
              >-</span>
            </div>
            <div class="cost">
              <span>￥{{cost(item)}}</span>
            </div>
            <div class="mask"></div>
          </div>
          <div class="del">
            <span @click="delCartItem(item)">x</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "cartlist",

  computed: {
    ...mapState({
      order: state => state.order.order,
      cart: state => state.cart.cart,
      checkAll: state => state.cart.checkAll
    }),
    ...mapGetters(["cost", "itemListBtns", "unbanCart"])
  },
  methods: {
    ...mapMutations(["transCheck", "transCheckAll", "transQty", "delCartItem"])
  },
  created() {
    this.cart.unshift(this.order);
    // 为什么这里直接调用mapMutations却不能生效
    this.transCheckAll();
    // this.$store.commit("transCheckAll");
  }
};
</script>

<style>
.cart-list {
  text-align: center;
}
.cart-list .list-title {
  font-size: 14px;
  color: #444549;
  margin-bottom: 10px;
}
.titles label {
  margin-right: 10px;
}
.list-item {
  border-top: 2px solid #2b2e33;
  border-bottom: 2px solid #2b2e33;
}
.list-item .item-block {
  font-size: 14px;
  color: #444549;
}
.list-item .item-block.unsell {
  color: #a9aaae;
}
.list-item .item-block + .item-block {
  border-top: 1px solid #d1d7e3;
}
.item-block .item-block-main {
  padding: 20px 0;
  flex-grow: 1;
  position: relative;
}
.item-block .item-block-main .mask {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0.4;
  background-image: url("./../../assets/img/mask.png");
}
.item-block.unsell .item-block-main .mask {
  display: block;
}
.item-block .item-info .info-text {
  margin-left: 10px;
}
.item-block .item-info img {
  width: 96px;
}
.item-block .item-info img.warn-icon {
  width: 65px;
  margin-left: 10px;
}
/* .item-block.unsell .item-info img.warn-icon {
  display: block;
} */
.item-block .item-info h3 {
  max-width: 240px;
  /* color: #2c2d32; */
  margin-bottom: 20px;
}
.item-block .item-info span {
  display: block;
  font-size: 12px;
  color: #a9aaae;
}
.item-block .quantity {
  justify-content: space-around;
}
.item-block .quantity .btn {
  line-height: 30px;
  width: 30px;
  padding: 0;
  color: #000;
  border-color: #000;
  border-radius: 0;
}
.item-block .quantity .btn.disable {
  color: #bcbdbf;
  border-color: #bcbdbf;
}
.item-block.unsell .cost span {
  color: #a9aaae;
}
.item-block .cost span {
  color: #f40000;
}
.item-block .del span {
  font-size: 20px;
  cursor: pointer;
  user-select: none;
}

label.custome-label {
  display: block;
  width: 26px;
  height: 26px;
  color: #2a2f35;
  border: 2px solid #babec9;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
label.custome-label.checked {
  border-color: #fdd900;
  background-color: #fdd900;
}
.cart-list .check {
  width: 95px;
  flex-shrink: 0;
}
.cart-list .product {
  text-align: left;
  flex-grow: 1;
  max-width: 460px;
}
.cart-list .quantity {
  width: 180px;
  flex-shrink: 0;
}
.cart-list .item-price {
  max-width: 160px;
  flex-grow: 1;
}
.cart-list .cost {
  max-width: 140px;
  flex-grow: 1;
}
.cart-list .del {
  width: 60px;
  flex-shrink: 0;
}
</style>
