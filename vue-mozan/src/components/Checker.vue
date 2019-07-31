<template>
  <label :class="{'custome-label':true,checked:checking}">{{checking?'√':''}}</label>
</template>

<script>
export default {
  name: "checker",
  props: {
    checking: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
label.custome-label {
  display: block;
  width: 26px;
  height: 26px;
  color: #2a2f35;
  border: 2px solid #babec9;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
label.custome-label.checked {
  border-color: #fdd900;
  background-color: #fdd900;
}
</style>
