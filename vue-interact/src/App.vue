<template>
  <div>
    <button @click="show">按钮</button>
    <Button @show="show"/>
    <Button/>
    <Modal
      title="对话框"
      onCancel="取消"
      onConfirm="确定"
      :visible="isShow"
      @disappear="disappear"
      @confirm="confirm"
      @cancel="cancel"
    >
      <template v-slot:top>
        <button>具名插槽添加内容</button>
      </template>
      <p>123456</p>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";
import Button from "./components/Button";
export default {
  name: "app",
  data() {
    return {
      isShow: false
    };
  },
  components: {
    Modal,
    Button
  },
  methods: {
    show() {
      this.isShow = true;
    },
    disappear() {
      this.isShow = false;
    },
    confirm() {
      console.log("已经确认，执行操作");
      this.isShow = false;
    },
    cancel() {
      console.log("已经取消,不执行操作");
      this.isShow = false;
    }
  }
};
</script>

<style>
</style>
