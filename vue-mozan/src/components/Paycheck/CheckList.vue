<template>
  <div class="cart-list">
    <div class="cart-title df">
      <h3>商品信息</h3>
      <router-link :to="$publicUrl+'/cart'">返回购物车修改</router-link>
    </div>
    <div class="list-item">
      <ul class="bd-y">
        <li
          :class="{df:true, 'item-block':true,'pd-x':true}"
          v-for="item in selectCart"
          :key="item.productId"
        >
          <div class="item-block-main df">
            <div class="item-info product df">
              <img src="./../../assets/img/banner-pic1.png" />
              <img
                v-if="item.presell"
                :src="item.presell?require('./../../assets/img/address/presell-icon.png'):''"
                class="warn-icon"
              />
              <!-- 上面使用三目运算require引入图片的方式 -->
              <div class="info-text">
                <h3>{{item.title}}</h3>
              </div>
            </div>
            <div class="df item-devinfo">
              <span>款式:{{item.model}}</span>
              <span>尺寸:{{item.size}}</span>
            </div>
            <div class="item-price">
              <span>￥{{item.price.presell.toFixed(2)}}</span>
            </div>
            <div class="quantity df">
              <span>{{item.qty}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "checklist",
  computed: {
    ...mapGetters(["selectCart"])
  }
};
</script>

<style>
.bd-y {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.pd-x {
  padding-left: 20px;
  padding-right: 20px;
}
.cart-title {
  justify-content: space-between;
  margin-bottom: 15px;
}
.cart-title h3 {
  font-size: 18px;
  font-weight: bold;
}
.cart-title a {
  color: #000;
  font-size: 14px;
}
.cart-list .item-block .product {
  min-width: 617px;
}
.item-block .item-info .info-text h3 {
  max-width: 490px;
}
.item-block .item-devinfo {
  min-width: 180px;
  flex-grow: 1;
}
.item-block .item-devinfo span {
  display: block;
  font-size: 12px;
  color: #a9aaae;
}
.item-block .item-devinfo span + span {
  margin-left: 30px;
}
</style>
