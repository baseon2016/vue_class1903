<template>
  <div class="topics">
    <img v-if="!topics.length" src="http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif" />
    <ul v-else>
      <li v-for="item in topics" :key="item.id">
        <p>{{item.title}}</p>
        <span>likes:{{item.likeNum}}</span>
        <span>comment:{{item.commentNum}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// vue 组件的生命周期钩子（函数）
// 当组件出现的时候就需要向后台发送请求获取数据
// 1.beforeCreate
// 2.created 初始化data 和(event.watch)时，在这个生命周期内可以修改 data,一般用于刚进页面的时候向后台获取数据更新组件data
// 3.beforeMount 组件渲染成真实 dom 之前
// 4.mounted 渲染真实 dom 完毕 此时组件在页面就出现了 在这个生命周期内可以获取真实的 dom
// 5.beforeUpdate 组件更新 data 前
// 6.updated 组件更新data完毕
// 7.destroyed 组件被销毁
import axios from "axios";
export default {
  name: "topics",
  data() {
    return {
      topics: []
    };
  },
  created() {
    axios
      .get("http://localhost:1100/topics")
      .then(res => (this.topics = res.data));
  }
};
</script>

<style scoped>
.topics span {
  margin-right: 10px;
}
</style>
