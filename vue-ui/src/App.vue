<template>
  <div class="vue-ui">
    <div>
      <h1>Vue-Ui</h1>
    <p>Hello World</p>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <img :src="item.src" />
      </el-carousel-item>
    </el-carousel>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      imgs: [
        {
          id: "1",
          src:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/php07gwYX1562220927.jpg"
        },
        {
          id: "2",
          src:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpKFZpUE1556199807.jpg"
        },
        {
          id: "3",
          src:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpvZxtA71517380076.png"
        },
        {
          id: "4",
          src:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpTNN3JS1561984549.jpg"
        },
        {
          id: "5",
          src:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpZXYkdM1561721363.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
/* scss sass less 都是css的扩展 */
/* 安装 sass 1.安装 node-sass sass-loader 工具包 */
/* $ npm i node-sass sass-loader -D */
@import "./assets/theme.scss";
.el-carousel__item img {
  display: block;
  width: 100%;
}

.vue-ui {
  color: $main-color;
  h1 {
    font-size: 26px;
    letter-spacing: 5px;
    &:hover {
      font-size: 36px;
      letter-spacing: 0;
      color: $bg-color;
    }
  }

  p {
    color: $bg-color;
  }
}
</style>
