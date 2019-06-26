<template>
  <div>
    <CommentForm @commentForm="addComment"/>
    <Comment :comments="comments" @comment="delComment"/>
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";
export default {
  name: "app",
  components: {
    CommentForm,
    Comment
  },
  data() {
    return {
      // changeText: "输入您的评论",
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
      ]
    };
  },
  methods: {
    delComment(commentId) {
      // comments数组重新赋值为筛选后的数组
      this.comments = this.comments.filter(item => item.id != commentId);
    },
    addComment(changeTextVal) {
      if (changeTextVal.trim() != "") {
        let newComment = {
          id: new Date().getTime(),
          content: changeTextVal
        };
        this.comments.push(newComment);
        // this.changeText = "";
        changeTextVal = "";
        console.log(changeTextVal);
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
</style>
