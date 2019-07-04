<template>
  <div class="post">
    <ul>
      <li v-for="item in comments" :key="item.id">{{item.comment+item.id}}</li>
    </ul>
  </div>
</template>

<script>
import shortId from "shortid";
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      comments: []
    };
  },
  // created() {
  //   for (let i = 0; i < 100; i++) {
  //     const newComment = {
  //       id: shortId(),
  //       comment: "此处添加评论内容"
  //     };
  //     axios.post("http://localhost:1100/comments", newComment);
  //   }
  // }
  created() {
    axios.get();
    this.comments = [];
  }
};
</script>

<style>
</style>
