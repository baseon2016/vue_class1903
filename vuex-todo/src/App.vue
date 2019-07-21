<template>
  <div class="todo">
    <TodoHead />
    <TodoContent />
    <TodoFunc />
  </div>
</template>

<script>
import TodoHead from "./components/TodoHead";
import TodoContent from "./components/TodoContent";
import TodoFunc from "./components/TodoFunc";
export default {
  name: "app",
  components: {
    TodoHead,
    TodoContent,
    TodoFunc
  }
};
</script>

<style>
.todo {
  width: 500px;
  border: 1px solid #ababab;
  margin: 0 auto;
}
.todo span {
  margin: 0 10px;
}
</style>
