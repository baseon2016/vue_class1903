<template>
  <div class="order">
    <div class="price df">
      <span class="tag">预售价</span>
      <div>
        <span>￥{{presell.price.presell.toFixed(2)}}</span>
        <p>
          正价:￥
          <span>{{presell.price.normal.toFixed(2)}}</span>
        </p>
      </div>
    </div>
    <div class="model df">
      <span class="tag">款式</span>
      <ul class="df">
        <li v-for="item in presell.model" :key="item">{{item}}</li>
      </ul>
    </div>
    <div class="size df">
      <span class="tag">尺码</span>
      <ul class="df">
        <li v-for="item in presell.size" :key="item">{{item}}</li>
      </ul>
    </div>
    <div class="qty df">
      <span class="tag">数量</span>
      <ul class="df">
        <li>-</li>
        <li>
          <span>{{order.qty}}</span>
        </li>
        <li>+</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "order",
  computed: {
    ...mapState({
      presell: state => state.eta.presell,
      order: state => state.order.order
    })
  }
};
</script>

<style>
.order {
  padding-left: 50px;
}
.order .price {
  align-items: flex-start;
}
.order span.tag {
  display: block;
  width: 64px;
  height: 26px;
  border-radius: 9px;
  background-color: #fff;
  color: #000;
  text-align: center;
  margin-right: 30px;
}
</style>
