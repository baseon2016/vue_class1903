<template>
  <div :class="{'switcher':true,'switch-active':active}">
    {{text}}
    <slot></slot>
    <Checker v-show="active" :checking="true" class="switch-icon" />
  </div>
</template>

<script>
import Checker from "./Checker";
export default {
  name: "switcher",
  components: {
    Checker
  },
  props: {
    active: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      default: "默认开关"
    }
  }
};
</script>

<style>
.switcher {
  display: block;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  border: 3px solid #babec9;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 132px;
}
.switcher.switch-active {
  border-color: #fdd900;
}
.switcher .switch-icon {
  width: 19px;
  height: 19px;
  line-height: 19px;
  color: #fff;
  border: 0;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
