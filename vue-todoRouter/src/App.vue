<template>
  <div class="todo">
    <div>
      <span class="completeAll" @click="completeAllToggle">全选</span>
      <input
        @keyup.enter="submit"
        type="text"
        v-model="todoVal"
        placeholder="What needs to be done?"
        class="todoInput"
      >
    </div>
    <router-view></router-view>
    <!-- <ul v-for="item in todoListR" :key="item.id">
      <li
        v-show="showItem==='all'?true:showItem==='complete'?item.complete===true:item.complete===false"
        @mouseenter="item.showDel=true"
        @mouseleave="item.showDel=false"
      >
        <span
          :class="{select:true,selected:item.complete===true}"
          @click="item.complete=!item.complete"
        ></span>
        <span :class="{content:true,selected:item.complete===true}">{{item.content}}</span>
        <span class="del" @click="del(item.id)" v-show="item.showDel">X</span>
      </li>
    </ul>-->
    <Func
      v-show="todoList.length!=0"
      :todoNum="todoNum"
      :showItem="showItem"
      :showClear="showClear"
      @all="all"
      @active="active"
      @complete="complete"
      @clear="clear"
    />
  </div>
</template>

<script>
import shortId from "shortid";
import Func from "./components/Func";
export default {
  name: "app",
  components: {
    Func
  },
  data() {
    return {
      todoVal: "",
      showItem: "all",
      todoList: []
    };
  },
  computed: {
    todoListR() {
      return [...this.todoList].reverse();
    },
    todoNum() {
      const num = this.todoList.filter(element => element.complete === false);
      return num.length;
    },
    showClear() {
      return !this.todoList.every(element => element.complete === false);
    }
  },
  methods: {
    submit() {
      if (this.todoVal.trim() != "") {
        let newItem = {
          id: shortId(),
          complete: false,
          content: this.todoVal,
          showDel: false
        };
        this.todoList.push(newItem);
        this.todoVal = "";
        console.log(this.todoList);
      } else {
        alert("请输入有效内容");
      }
    },
    completeAllToggle() {
      if (this.todoList.every(element => element.complete === true)) {
        this.todoList.forEach(element => (element.complete = false));
      } else {
        this.todoList.forEach(element => (element.complete = true));
      }
    },
    del(id) {
      this.todoList = this.todoList.filter(element => element.id != id);
    },
    all() {
      this.showItem = "all";
    },
    complete() {
      this.showItem = "complete";
    },
    active() {
      this.showItem = "active";
    },
    clear() {
      this.todoList = this.todoList.filter(
        element => element.complete === false
      );
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.todo {
  width: 500px;
  border: 1px solid #ababab;
  margin: 0 auto;
}
.todo .todoInput {
  outline: 0;
  border: 0;
  padding: 10px;
  font-size: 16px;
}
.todo li {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo span {
  margin: 0 10px;
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
