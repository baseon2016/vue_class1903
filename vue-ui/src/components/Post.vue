<template>
  <div class="post">
    <div v-if="!commentsShow.length">
      <img src="http://img.lanrentuku.com/img/allimg/1212/5-121204193934-51.gif" />
    </div>
    <ul v-else>
      <li v-for="item in commentsShow" :key="item.id">{{item.comment+item.id}}</li>
    </ul>
    <el-pagination
      :background="true"
      layout="prev, pager, next"
      :total="comments.length"
      :page-size="limitNum"
      :page-count="5"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
// import shortId from "shortid";
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      limitNum: 10,
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
        setTimeout(() => {
          this.commentsShow = res.data;
        }, 1000);
      });
  },

  methods: {
    changePage(currentPage) {
      this.commentsShow = [];
      this.pageIndex = currentPage;
      this.$router.push(`/?page=${currentPage}`);

      axios
        .get(
          `http://localhost:3008/comments?_limit=${this.limitNum}&_page=${this.pageIndex}`
        )
        .then(res => {
          setTimeout(() => {
            this.commentsShow = res.data;
          }, 1000);
        });
    }
  }
};
</script>

<style scoped>
</style>
