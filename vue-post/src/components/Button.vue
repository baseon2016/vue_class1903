<template>
  <button @click="$emit('btnFun')">{{btnText}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnText: {
      type: String,
      default: "默认按钮"
    }
  }
};
</script>

<style scoped>
button {
  background-color: rgb(204, 123, 18);
  padding: 5px 10px;
  border-radius: 8px;
}
</style>
