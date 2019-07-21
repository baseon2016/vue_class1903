import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    todoList: [],
    showItem: "all"
  },
  mutations: {
    getTodoList(state, payload) {
      state.todoList = payload;
      state.todoList.forEach(ele => (ele.showDel = false));
    },
    addTodoList(state, payload) {
      state.todoList.push(payload);
    },
    showDel(state, payload) {
      state.todoList.find(ele => ele.id === payload.id).showDel = true;
    },
    hideDel(state, payload) {
      state.todoList.find(ele => ele.id === payload.id).showDel = false;
    },
    del(state, payload) {
      state.todoList = state.todoList.filter(ele => ele.id != payload);
    },
    toggleComplete(state, payload) {
      state.todoList.find(
        ele => ele.id === payload
      ).complete = !state.todoList.find(ele => ele.id === payload).complete;
    },
    all(state) {
      state.showItem = "all";
    },
    active(state) {
      state.showItem = "active";
    },
    complete(state) {
      state.showItem = "complete";
    }
  },
  actions: {
    getTodoList(context) {
      axios.get("http://localhost:3008/todolist").then(res => {
        context.commit("getTodoList", res.data);
      });
    },
    addTodoList(context, payload) {
      axios.post("http://localhost:3008/todolist", payload).then(res => {
        context.commit("addTodoList", res.data);
      });
    },
    del(context, payload) {
      axios.delete(`http://localhost:3008/todolist/${payload}`).then(res => {
        context.commit("del", payload);
      });
    },
    toggleComplete(context, payload) {
      const status = context.state.todoList.find(ele => ele.id === payload)
        .complete;
      axios
        .patch(`http://localhost:3008/todolist/${payload}`, {
          complete: !status
        })
        .then(res => {
          console.log(res.data);
          context.commit("toggleComplete", payload);
        });
    }
  }
});

export default store;
