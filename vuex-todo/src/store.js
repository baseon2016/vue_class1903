import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    todoList: [],
    showItem: "all",
    todoVal: ""
  },
  mutations: {
    getTodoList(state, payload) {
      state.todoList = payload;

    },
    addTodoList(state, payload) {
      state.todoList.push(payload);
      state.todoVal = "";
    },
 
    del(state, payload) {
      state.todoList = state.todoList.filter(ele => ele.id != payload);
    },
    toggleComplete(state, payload) {
      state.todoList.find(
        ele => ele.id === payload
      ).complete = !state.todoList.find(ele => ele.id === payload).complete;
    },

    change(state, payload) {
      state.showItem = payload;
    },
    changeVal(state, newVal) {
      state.todoVal = newVal;
    }
  },
  actions: {
    getTodoList(context) {
      axios.get("http://localhost:3008/todolist").then(res => {
        context.commit("getTodoList", res.data);
      });
    },
    addTodoList(context, payload) {
      axios
        .post("http://localhost:3008/todolist", payload.newItem)
        .then(res => {
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
    },
    completeAllToggle(context) {
      if (context.state.todoList.every(ele => ele.complete === true)) {
        const todos = context.state.todoList.map(element => {
          const todo = { ...element };
          todo.complete = false;
          return todo;
        });
        axios.put("http://localhost:3008/todolist", todos).then(res => {
          console.log(res.data);
        });
      } else {
        const todos = context.state.todoList.map(element => {
          const todo = { ...element };
          todo.complete = false;
          return todo;
        });
        axios.put("http://localhost:3008/todolist", todos).then(res => {
          console.log(res.data);
        });
      }
    }
  },
  getters: {
    todoListR(state) {
      const newTodo = [...state.todoList]
        .reverse()
        .filter(element =>
          state.showItem === "all"
            ? true
            : state.showItem === "active"
            ? element.complete === false
            : element.complete === true
        );
      return newTodo;
    }
  }
});

export default store;
