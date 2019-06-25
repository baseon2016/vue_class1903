<template>
  <button @click="$emit('show')">组件按钮</button>
</template>

<script>
export default {
  name: "btn",
  props: {
    clicFun: {
      type: Function
    }
  }
};
</script>

<style>
</style>
