<template>
  <div class="func">
    <div>
      <span>{{todoNum}} items left</span>
    </div>
    <div class="options">
      <span
        :class="{selected:$store.state.showItem==='all'?true:false}"
        @click="$store.commit('all')"
      >All</span>
      <span
        :class="{selected:$store.state.showItem==='active'?true:false}"
        @click="$store.commit('active')"
      >Active</span>
      <span
        :class="{selected:$store.state.showItem==='complete'?true:false}"
        @click="$store.commit('complete')"
      >Completed</span>
    </div>
    <div class="clear">
      <span v-show="showClear">Clear completed</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "func",
  computed: {
    todoNum() {
      const num = this.$store.state.todoList.filter(
        element => element.complete === false
      );
      return num.length;
    },
    showClear() {
      return !this.$store.state.todoList.every(
        element => element.complete === false
      );
    }
  }
};
</script>

<style>
.func {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.func .options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.func .options span,
.func .clear span {
  cursor: pointer;
}
.func span {
  font-size: 12px;
}
.func .options span {
  padding: 5px;
  border: 1px solid transparent;
}
.func .options span.selected {
  border-color: hotpink;
}
.options span:hover {
  border-color: pink;
}
.func .clear {
  width: 120px;
}
.func .clear span:hover {
  text-decoration: underline;
}
</style>
