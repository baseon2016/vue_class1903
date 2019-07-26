<template>
  <div class="cart">
    <div class="cart-inner container">
      <div class="cart-head">
        <Procedure />
      </div>
      <div class="cart-main">
        <div class="cart-list">
          <div class="list-title">
            <ul class="df titles">
              <li class="df check">
                <input type="checkbox" id="select-all" />
                <label for="select-all"></label> 全选
              </li>
              <li class="product">商品</li>
              <li class="price">单价</li>
              <li class="quantity">数量</li>
              <li class="cost">小计</li>
              <li class="del">操作</li>
            </ul>
          </div>
          <div class="list-item">
            <ul>
              <li class="df item-block">
                <div class="check">
                  <input type="checkbox" :id="order.productId" />
                  <label :for="order.productId"></label>
                </div>
                <div class="item-info product df">
                  <img src="./../assets/img/banner-pic1.png" />
                  <div class="info-text">
                    <h3>{{order.title}}</h3>
                    <span>款式:{{order.model}}</span>
                    <span>尺寸:{{order.size}}</span>
                  </div>
                </div>
                <div class="price">
                  ￥
                  <span>{{order.price.presell.toFixed(2)}}</span>
                </div>
                <div class="quantity df">
                  <span class="btn">+</span>
                  <span>{{order.qty}}</span>
                  <span class="btn">-</span>
                </div>
                <div class="cost">
                  <span>{{'小计'}}</span>
                </div>
                <div class="del">
                  <span>x</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Procedure from "./Procedure";
export default {
  name: "cart",
  components: {
    Procedure
  },
  computed: {
    ...mapState({
      order: state => state.order.order
    })
  },
  created() {
    console.log(this.order);
  }
};
</script>

<style>
.cart {
  background-image: url("./../assets/img/style-bg.png");
  background-repeat: repeat;
}
.cart-inner {
  padding: 24px 50px 80px;
  background-color: #fff;
  background-image: url("./../assets/img/cart-top.png");
  background-repeat: no-repeat;
}
.cart-head {
  padding-bottom: 70px;
}
.cart-list {
  text-align: center;
}
.cart-list .list-title {
  font-size: 14px;
  color: #444549;
}
.titles label {
  margin-right: 10px;
}
.list-item {
  border-top: 2px solid #2b2e33;
  border-bottom: 2px solid #2b2e33;
  font-size: 14px;
  color: #444549;
}
.list-item .item-block {
  padding: 20px 0;
}
.item-info .info-text {
  margin-left: 10px;
}
.item-block .item-info img {
  width: 96px;
}
.item-block .item-info h3 {
  max-width: 240px;
  color: #2c2d32;
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
.cart-list input {
  display: none;
}
.cart-list label {
  display: block;
  width: 26px;
  height: 26px;
  border: 2px solid #babec9;
}
.check {
  width: 95px;
  flex-shrink: 0;
}
.product {
  text-align: left;
  flex-grow: 1;
}
.quantity {
  width: 180px;
  flex-shrink: 0;
}
.price {
  width: 70px;
  flex-shrink: 0;
}
.cost {
  width: 70px;
  flex-shrink: 0;
}
.del {
  width: 35px;
  flex-shrink: 0;
}
</style>
