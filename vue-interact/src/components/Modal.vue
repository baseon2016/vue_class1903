<template>
  <div class="modal-wrap" v-show="visible">
    <div class="modal-mask" @click="$emit('disappear')"></div>
    <div class="modal">
      <div class="modal-top">
        <div class="title">{{title}}</div>
        <span @click="$emit('disappear')" style="cursor:pointer">X</span>
        <slot name="top"></slot>
      </div>
      <div class="modal-main">
        <slot></slot>
      </div>
      <div class="modal-bottom">
        <button @click="$emit("cancel")" style="marginRight:20px">{{onCancel}}</button>
        <button @click="$emit('confirm')">{{onConfirm}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    title: {
      type: String,
      default: "Default Title"
    },
    onCancel: {
      type: String,
      default: "Cancel"
    },
    onConfirm: {
      type: String,
      default: "Confirm"
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    maskClick() {
      this.visible = false;
    }
  }
};
</script>

<style>
.modal-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.modal-wrap .modal-mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
}
.modal-wrap .modal {
  width: 520px;
  height: 218px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 100px;
  z-index: 1000;
  transform: translateX(-50%);
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.modal-wrap .modal .modal-top {
  padding: 10px 20px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.modal-wrap .modal .modal-main {
  flex-grow: 1;
}
.modal-wrap .modal .modal-bottom {
  padding: 10px 20px;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #ccc;
}
</style>
