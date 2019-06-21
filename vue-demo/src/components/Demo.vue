<template>
  <div :class="{active:isActive,title:true}">
    组件测试
    <button @click="handleClick">按钮</button>
    <div v-show="show" class="box"></div>
    <button @click="handleShow">消失出现</button>
    <div v-if="showBox1" class="box1"></div>
    <div v-else class="box2"></div>
    <button v-on:click="handleSwitch">v-box1和box2切换</button>
    <div class="carts">
      <div v-for="item in carts" class="cartItem" :key="item.id">
        <h3>{{item.goodsName}}</h3>
        <div>
          <span>{{item.qty}}</span>
          <span>{{item.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      isActive: true,
      show: true,
      showBox1: true,
      carts: [
        {
          id: 1234,
          goodsName: "Huawei P30",
          qty: 1,
          price: 6000
        },
        {
          id: 5678,
          goodsName: "Drone Dajiang",
          qty: 1,
          price: 3000
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log(this.isActive);
      if (this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
    handleShow() {
      this.show = !this.show;
    },
    handleSwitch() {
      this.showBox1 = !this.showBox1;
    }
  }
};
</script>

<style>
.title {
  color: #000;
}
.active {
  color: lawngreen;
  font-size: 16px;
}
.box {
  width: 200px;
  height: 200px;
  background-color: #aaa;
}
.box1 {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
.box2 {
  width: 200px;
  height: 200px;
  background-color: gold;
}
</style>
