<template>
  <div class="post-comment">
    <div class="comment-list">
      <ul v-if="postComment.length">
        <li v-for="item in postComment" :key="item.id">
          {{item.text}}
          <button @click="delComment(item.id)">删除</button>
        </li>
      </ul>
    </div>

    <div class="reply">
      <span>评论</span>
      <input type="text" v-model="replytext" placeholder="请输入评论" @keyup.enter="reply" />
      <button @click="reply">添加评论</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "postcomment",
  data() {
    return {
      replytext: ""
    };
  },
  computed: {
    postComment() {
      return this.$store.getters.currentComments
    }
  },
  methods: {
    reply() {
      if (this.replytext.trim()) {
        const newReply = {
          text: this.replytext,
          postId: this.$route.params.id
        };
        this.$store.dispatch("addComment", { newReply, clear: this.clear });
      }
    },
    clear() {
      this.replytext = "";
    },
    delComment(id) {
      this.$store.dispatch("delComment", id);
    }
  },
  created() {
    this.$store.dispatch("getComments", this.$route.params.id);
  }
};
</script>

<style>
</style>
