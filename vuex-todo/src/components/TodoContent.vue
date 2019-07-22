<template>
  <div>
    <ul v-if="todoListR">
      <li v-for="item in todoListR" :key="item.id">
        <span :class="{select:true,selected:item.complete===true}" @click="toggleComplete(item.id)"></span>
        <span :class="{content:true,selected:item.complete===true}">{{item.content}}</span>
        <span class="del" @click="del(item.id)">X</span>
      </li>
    </ul>
    <div v-else>请添加待办事项</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "todocontent",
  computed: {
    ...mapGetters(["todoListR"])
  },
  methods: {
    ...mapActions(["del", "toggleComplete"])
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
.todo li .del {
  display: none;
}
.todo li:hover .del {
  display: block;
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
