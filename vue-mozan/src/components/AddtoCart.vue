<template>
  <div>
    <div>
      <img src="./../assets/img/addtocart/addtocart.png" />
    </div>
    <div class="orderitem">
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
      <div class="confirm">
        <span>返回</span>
        <span>去购物车结算</span>
      </div>
    </div>
    <div>
      <div class="block-title df">
        <h3>您可能还需要</h3>
        <hr />
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
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "addtocart",
  computed: {
    ...mapState({
      order: state => state.order.order
    })
  }
};
</script>

<style>
</style>
