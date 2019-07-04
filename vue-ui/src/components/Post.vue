<template>
  <div class="post">
    <ul>
      <li v-for="item in commentsShow" :key="item.id">{{item.comment+item.id}}</li>
      <el-pagination
        :background="true"
        layout="prev, pager, next"
        :total="comments.length"
        :page-size="limitNum"
        @current-change="changePage"
      ></el-pagination>
    </ul>
  </div>
</template>

<script>
// import shortId from "shortid";
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      limitNum: 20,
      pageIndex: 1,
      comments: [],
      commentsShow: []
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
    axios
      .get("http://localhost:3008/comments")
      .then(res => (this.comments = [...res.data]));
    axios
      .get(
        `http://localhost:3008/comments?_limit=${this.limitNum}&_page=${this.pageIndex}`
      )
      .then(res => {
        this.commentsShow = res.data;
      });
  },
  updated() {
    axios
      .get(
        `http://localhost:3008/comments?_limit=${this.limitNum}&_page=${this.pageIndex}`
      )
      .then(res => {
        this.commentsShow = res.data;
      });
  },
  methods: {
    changePage(currentPage) {
      this.pageIndex = currentPage;
      console.log(this.pageIndex);
    }
  }
};
</script>

<style>
</style>
