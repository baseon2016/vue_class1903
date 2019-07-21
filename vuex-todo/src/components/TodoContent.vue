<template>
  <div>
    <ul v-if="todoListR">
      <li
        v-for="item in todoListR"
        :key="item.id"
        @mouseenter="$store.commit('showDel',item)"
        @mouseleave="$store.commit('hideDel',item)"
      >
        <span :class="{select:true,selected:item.complete===true}" @click="toggleComplete(item.id)"></span>
        <span :class="{content:true,selected:item.complete===true}">{{item.content}}</span>
        <span class="del" @click="del(item.id)" v-show="item.showDel">X</span>
      </li>
    </ul>
    <div v-else>请添加待办事项</div>
  </div>
</template>

<script>
export default {
  name: "todocontent",
  computed: {
    todoListR() {
      const newTodo = [...this.$store.state.todoList]
        .reverse()
        .filter(element =>
          this.$store.state.showItem === "all"
            ? true
            : this.$store.state.showItem === "active"
            ? element.complete === false
            : element.complete === true
        );
      return newTodo;
    }
  },
  methods: {
    del(id) {
      this.$store.dispatch("del", id);
    },
    toggleComplete(id) {
      this.$store.dispatch("toggleComplete", id);
    }
  },
  created() {
    this.$store.dispatch("getTodoList");
  }
};
</script>

<style>
.todo li {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo .select {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #cdcdcd;
}
.todo .select.selected {
  background-color: yellowgreen;
}
.todo .content.selected {
  color: #aaa;
  text-decoration: line-through;
}
.todo .content {
  flex-grow: 1;
}
.todo .completeAll,
.todo .select,
.todo .del {
  cursor: pointer;
}
</style>
