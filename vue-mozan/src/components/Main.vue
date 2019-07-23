<template>
  <div>
    <div class="container">
      <el-carousel type="card" height="404px" arrow="hover" :loop="true" :autoplay="false">
        <el-carousel-item>
          <img src="./../assets/img/banner-pic1.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/img/banner-pic2.png" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/img/banner-pic3.png" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "maincontent"
};
</script>

<style>
.el-carousel {
  background-image: url("./../assets/img/banner-bg.png");
}

.el-carousel__item img {
  display: block;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
