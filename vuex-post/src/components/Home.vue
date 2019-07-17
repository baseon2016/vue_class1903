<template>
  <div>
    <div>文章列表</div>
    <ul v-if="posts.length">
      <li v-for="item in posts" :key="item.id">
        <router-link :to="`/post/${item.id}`">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style>
</style>
