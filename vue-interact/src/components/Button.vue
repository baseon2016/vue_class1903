<template>
  <button class="btn" @click="$emit('clickBtnFun')">{{text}}</button>
</template>

<script>
export default {
  name: "btn",
  props: {
    text: {
      type: String,
      default: "组件默认按钮"
    }
  }
};
</script>

<style scoped>
.btn {
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 4px;
  color: #fff;
  background: linear-gradient(#000, #333);
  cursor: pointer;
}
</style>
