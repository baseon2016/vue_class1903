<template>
  <div>
    <button @click="add">+</button>
    <span>{{num}}</span>
    <button @click="minus">-</button>
    <button @click="changeNum(100,400)">change_to_100</button>
  </div>
</template>

<script>
// 组件内获取store里面的数据 $store.state 获取
// 动态修改 store中的数据 触发store 中创建好的mutations函数
// 需要使用 store中的commit方法 例如 this.$store.commit('add') 触发了 add mutations 函数
export default {
  name: "app",
  computed: {
    num() {
      return this.$store.state.num;
    }
  },
  methods: {
    add() {
      this.$store.commit("add");
    },
    minus() {
      this.$store.commit("minus");
    },
    changeNum(num1, num2) {
      this.$store.commit("changeNum", { num1, num2 });
    }
  },
  created() {
    console.log(this.$store);
  }
};
</script>

<style>
</style>
