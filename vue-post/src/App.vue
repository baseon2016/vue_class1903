<template>
  <div>
    <h1>兄弟组件的交互</h1>
    <CommentForm @commentForm="addComment"/>
    <Comment :commentNum="number" :comments="commentsR" @comment="delComment"/>
    <h2>vue 组件内的过渡和动画</h2>
    <transition name="fade">
      <div v-show="show" class="box"></div>
    </transition>
    <transition name="trans">
      <div v-show="show" class="circle"></div>
    </transition>
    <Button @btnFun="show=!show" btnText="vue动画展示1"/>
    <Button @btnFun="show=!show" btnText="vue动画展示2"/>
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";
import Button from "./components/Button";
import shortId from "shortid";
export default {
  name: "app",
  components: {
    CommentForm,
    Comment,
    Button
  },
  data() {
    return {
      //comments是设定好的一个data
      //但是我们使用的时候，使用的是 data 数据的变形，一般使用 computed 属性存储计算属性（变形后的结果）,computed 和 data 使用是一模一样的
      comments: [
        {
          id: "x001",
          content: "hello world"
        },
        {
          id: "x002",
          content: "hello"
        },
        {
          id: "x003",
          content: "world"
        }
      ],
      show: true
    };
  },
  computed: {
    number() {
      return this.comments.length;
    },
    commentsR() {
      //reverse 方法会修改原数组，多次添加会顺序错乱
      //复制原数组，在进行倒叙
      // 复制对象的方法，js(obj.assign)  jq(.extends) es6扩展运算符([...array],{...obj})
      return [...this.comments].reverse();
    }
  },
  methods: {
    delComment(commentId) {
      // comments数组重新赋值为筛选后的数组
      this.comments = this.comments.filter(item => item.id != commentId);
    },
    addComment(changeTextVal) {
      if (changeTextVal.trim() != "") {
        let newComment = {
          id: shortId(),
          content: changeTextVal
        };
        this.comments.push(newComment);
        console.log(newComment.id);
      } else {
        alert("请输入有效字符");
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.box {
  width: 200px;
  height: 200px;
  background-color: #a3d4e5;
}
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3a4b5c;
  margin-left: 200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.trans-enter-active,
.trans-leave-active {
  transition: all 3s;
}
.trans-enter {
  transform: translateX(-200px);
}
.trans-leave-to {
  transform: translateX(200px);
}
</style>
