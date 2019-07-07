<template>
  <div>
    <cube-scroll-nav
      :side="true"
      :data="data"
      :current="current"
      @change="changeHandler"
      @sticky-change="stickyChangeHandler"
    >
      <!-- <ul class="prepend-header" slot="prepend">
        <li>11</li>
        <li>22</li>
        <li>333</li>
      </ul>-->
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll"
          :data="data"
          :options="options"
          @pulling-down="onPullingDown"
          @pulling-up="onPullingUp"
        >
          <cube-scroll-nav-panel
            v-for="item in data"
            :key="item.name"
            :label="item.name"
            :title="item.name"
          >
            <ul>
              <li v-for="food in item.foods" :key="food.id" class="food-item">
                <div>
                  <img :src="food.icon" />
                  <p>{{food.name}}</p>
                </div>
              </li>
            </ul>
          </cube-scroll-nav-panel>
        </cube-scroll>
      </div>
    </cube-scroll-nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "order",
  // components: {
  //   CubePage
  // },
  data() {
    return {
      data: [],
      limitNum: 1,
      current: "",
      options: {
        scrollbar: true,
        startY: 0,
        pullDownRefresh: {
          threshold: 70,
          stop: 50,
          txt: "更新成功"
        },
        pullUpLoad: {
          threshold: 70
        }
      }
    };
  },
  methods: {
    changeHandler(label) {
      console.log("changed to:", label);
      this.current = label;
    },
    stickyChangeHandler(current) {
      console.log("sticky-change", current);
      this.current = current;
    },
    onPullingDown() {
      this.limitNum++;
      axios
        .get(`http://localhost:3000/goods?_limit=${this.limitNum}`)
        .then(res => {
          setTimeout(() => {
            if (res.data.length >= this.limitNum) {
              // 如果有新数据
              this.data = res.data;
            } else {
              // 如果没有新数据，强制刷新结束
              this.$refs.scroll.forceUpdate();
            }
          }, 1000);
        });
    },
    onPullingUp() {
      this.limitNum++;
      axios
        .get(`http://localhost:3000/goods?_limit=${this.limitNum}`)
        .then(res => {
          setTimeout(() => {
            if (res.data.length >= this.limitNum) {
              // 如果有新数据
              this.data = res.data;
            } else {
              // 如果没有新数据，强制刷新结束
              this.$refs.scroll.forceUpdate();
            }
          }, 1000);
        });
    }
  },
  created() {
    axios
      .get(`http://localhost:3000/goods?_limit=${this.limitNum}`)
      .then(res => {
        this.data = res.data;
        this.current = res.data[0].name;
      });
  }
};
</script>

<style scoped>
.scroll-list-wrap {
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.scroll-list-wrap .food-item {
  padding: 15px 0;
  border-bottom: 1px solid #000;
}
</style>
