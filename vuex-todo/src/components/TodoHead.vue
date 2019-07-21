<template>
  <div>
    <!-- <span class="completeAll" @click="completeAllToggle">全选</span> -->
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
export default {
  name: "todohead",
  data() {
    return {
      todoVal: ""
    };
  },

  methods: {
    submit() {
      if (this.todoVal.trim() != "") {
        let newItem = {
          complete: false,
          content: this.todoVal,
          showDel: false
        };
        this.$store.dispatch("addTodoList", newItem);

        this.todoVal = "";
        console.log(this.todoList);
      } else {
        alert("请输入有效内容");
      }
    }
    // completeAllToggle() {
    //   if (this.$store.todoList.every(element => element.complete === true)) {
    //     this.todoList.forEach(element => (element.complete = false));
    //   } else {
    //     this.todoList.forEach(element => (element.complete = true));
    //   }
    // }
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
