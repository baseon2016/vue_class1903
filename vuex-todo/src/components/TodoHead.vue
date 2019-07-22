<template>
  <div>
    <span class="completeAll" @click="completeAllToggle">全选</span>
    <input
      @keyup.enter="submit"
      type="text"
      v-model="todoVal"
      placeholder="What needs to be done?"
      class="todoInput"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "todohead",
  computed: {
    todoVal: {
      get() {
        return this.$store.state.todoVal;
      },
      set(newVal) {
        this.$store.commit("changeVal", newVal);
      }
    }
  },
  methods: {
    ...mapActions(["addTodoList", "completeAllToggle"]),
    submit() {
      if (this.todoVal.trim() != "") {
        let newItem = {
          complete: false,
          content: this.todoVal,
          showDel: false
        };
        this.addTodoList({
          newItem
        });
      } else {
        alert("请输入有效内容");
      }
    }
  }
};
</script>

<style>
.todo .todoInput {
  outline: 0;
  border: 0;
  padding: 10px;
  font-size: 16px;
}
</style>
