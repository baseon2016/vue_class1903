<template>
  <div>
    <img v-if="!topic" src="http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif" />
    <!-- 想要将html字符串渲染到页面中 此操作是危险的 需要使用 v-html指令 -->
    <div v-else v-html="topic.content"></div>
  </div>
</template>

<script>
// 在这个组件出现的时候，获取页面地址上的id值
// 根据这个id值去后台获取对应的文章信息展示到组件上
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      topic: null
    };
  },
  created() {
    // 获取动态参数
    const { id } = this.$route.params;
    // 另一种使用路由传参的方式将文章数据传递过来
    // this.topic = this.$route.query.topic;
    axios.get(`http://localhost:1100/topics/${id}`).then(res =>
      setTimeout(() => {
        this.topic = res.data;
      }, 500)
    );
  }
};
</script>

<style>
</style>
