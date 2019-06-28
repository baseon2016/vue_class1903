<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">
          <h3>{{post.title}}</h3>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommendEnd",
  data() {
    return {
      posts: [
        {
          id: "0001",
          title:
            "[总结] Linux 基金会最新发展 + Linus 采访 + 媒体专访 | KubeCon + CloudNativeCon 2019"
        },
        {
          id: "0002",
          title: "Android插件化探索"
        },
        {
          id: "0003",
          title: "哪些技术会决定前端开发者的未来发展？"
        }
      ]
    };
  }
};
</script>

<style>
</style>
