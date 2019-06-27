<template>
  <div class="commentForm">
    <textarea @keyup.enter="commentFun" cols="30" rows="10" v-model="textVal"></textarea>
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
.commentForm {
  width: 75%;
  margin: 0 auto;
}
.commentForm textarea {
  resize: none;
}
</style>
