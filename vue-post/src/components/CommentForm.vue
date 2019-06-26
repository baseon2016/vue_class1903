<template>
  <div class="commentForm">
    <textarea cols="30" rows="10" v-model="textVal"></textarea>
    <!-- <button @click="addComment">评论</button> -->
    <Button @btnFun="commentFun" btnText="评论"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "commentform",
  components: {
    Button
  },
  // props: {
  //   textVal: {
  //     type: String
  //   }
  // }
  data() {
    return {
      textVal: "请输入您的评论"
    };
  },
  methods: {
    commentFun() {
      this.$emit("commentForm", this.textVal);
      this.textVal = "";
    }
  }
};
</script>

<style scoped>
.commentForm textarea {
  resize: none;
}
</style>
