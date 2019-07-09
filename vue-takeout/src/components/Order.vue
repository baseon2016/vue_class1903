<template>
  <div class="order">
    <cube-scroll-nav
      v-if="goods.length"
      class="container"
      :side="true"
      :data="goods"
      :current="current"
    >
      <!-- <ul class="prepend-header" slot="prepend">
        <li>11</li>
        <li>22</li>
        <li>333</li>
      </ul>-->
      <cube-scroll-nav-panel
        v-for="item in goods"
        :key="item.id"
        :label="item.name"
        :title="item.name"
      >
        <ul>
          <li v-for="food in item.foods" :key="food.id" class="food-item">
            <div>
              <img :src="food.icon" />
              <p>{{food.name}}</p>
            </div>
            <div>
              <button
                v-if="cartItems.find(element=>element.id===food.id)"
                @click="delCart(food)"
                class="delCart"
              >-</button>
              <span
                v-if="cartItems.find(element=>element.id===food.id)"
                class="qty"
              >{{cartItems.find(element=>element.id===food.id).num}}</span>
              <button @click="addCart(food)" class="addCart">+</button>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <Cart :cartItems="cartItems" :delCart="delCart" :addCart="addCart" :clearCart="clearCart" />
  </div>
</template>

<script>
import axios from "axios";
import Cart from "./Cart";
export default {
  name: "order",
  components: {
    Cart
  },
  data() {
    return {
      goods: [],
      cartItems: [],
      current: "热销榜"
    };
  },
  methods: {
    addCart(food) {
      if (this.cartItems.find(element => element.id === food.id)) {
        // 买过了
        axios
          .patch(`http://localhost:3000/carts/${food.id}`, {
            num: this.cartItems.find(element => element.id === food.id).num + 1
          })
          .then(res => {
            this.cartItems.find(element => element.id === food.id).num =
              res.data.num;
          });
      } else {
        // 没买过
        axios
          .post("http://localhost:3000/carts", { ...food, num: 1 })
          .then(res => {
            this.cartItems.push(res.data);
          });
      }
    },
    delCart(food, closeCart) {
      if (this.cartItems.find(element => element.id === food.id).num - 1 <= 0) {
        axios.delete(`http://localhost:3000/carts/${food.id}`).then(res => {
          const index = this.cartItems.filter(element => element.id != food.id);
          this.cartItems = index;
          if (closeCart && this.cartItems.length === 0) {
            closeCart();
          }
        });
      } else {
        axios
          .patch(`http://localhost:3000/carts/${food.id}`, {
            num: this.cartItems.find(element => element.id === food.id).num - 1
          })
          .then(res => {
            this.cartItems.find(element => element.id === food.id).num =
              res.data.num;
          });
      }
    },
    clearCart(closeCart) {
      const arr = this.cartItems.map(ele =>
        axios.delete(`http://localhost:3000/carts/${ele.id}`)
      );
      Promise.all(arr).then(res => {
        this.cartItems = [];
        closeCart();
      });
    }
  },
  created() {
    axios.get("http://localhost:3000/goods").then(res => {
      this.goods = res.data;
      this.current = res.data[0].name;
    });
    axios.get("http://localhost:3000/carts").then(res => {
      this.cartItems = res.data;
      console.log(res);
    });
  }
};
</script>

<style>
.cube-scroll-nav-panel-title {
  font-size: 20px;
  background-color: #fff;
  margin: 0;
  line-height: 1.8;
}
.order {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.cube-scroll-nav {
  flex-grow: 1;
  height: 500px;
}
</style>
