<template>
  <div class="post-body" v-if="postDetail">
    <h3>{{postDetail.title}}</h3>
    <span>评论数：{{postComment.length}}</span>
    <div>{{postDetail.content}}</div>
  </div>
</template>

<script>
export default {
  name: "postbody",
  computed: {
    postDetail() {
      const { id } = this.$route.params;
      return this.$store.state.posts.find(item => item.id === id);
    },
    postComment() {
      return this.$store.state.comments;
    }
  }
};
</script>

<style>
.post-body {
  border: 1px solid #ccc;
  background-color: grey;
}
</style>
