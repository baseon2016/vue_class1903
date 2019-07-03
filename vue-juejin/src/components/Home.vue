<template>
  <div class="home">
    <ul class="types">
      <li>
        <router-link
          to="/?sort=popular"
          :class="{'active-router':$route.query.sort==='popular'||$route.fullPath==='/'}"
          @click.native="switchCategory"
        >热门</router-link>
      </li>
      <li>
        <router-link
          to="/?sort=newest"
          :class="{'active-router':$route.query.sort==='newest'}"
          @click.native="switchCategory"
        >最新</router-link>
      </li>
      <li>
        <router-link
          to="/?sort=hottest"
          :class="{'active-router':$route.query.sort==='hottest'}"
          @click.native="switchCategory"
        >热榜</router-link>
      </li>
    </ul>
    <Topics :topics="topics" />
  </div>
</template>

<script>
import axios from "axios";
import Topics from "./Topics";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      type: "popular",
      gifwait: true
    };
  },

  components: {
    Topics
  },
  methods: {
    // 封装获取后台信息的函数
    getData(parameter) {
      axios.get(`http://localhost:1100/topics?${parameter}=true`).then(res =>
        setTimeout(() => {
          this.topics = res.data;
          console.log(this.$route);
        }, 500)
      );
    },
    switchCategory() {
      if (this.type === this.$route.query.sort) {
        console.log("已经点过了");
      } else {
        this.type = this.$route.query.sort;
        this.topics = [];
        this.getData(this.type);
      }
    }
  },
  created() {
    this.getData(this.type);
    console.log(this.$route);
  }
};
</script>

<style scoped>
.home .types {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ccc;
}
</style>
