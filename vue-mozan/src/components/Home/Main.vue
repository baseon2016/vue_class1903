<template>
  <div class="current-theme">
    <div class="container">
      <div class="inner-banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img src="./../../assets/img/banner-pic1.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="./../../assets/img/banner-pic2.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="./../../assets/img/banner-pic3.png" />
          </swiper-slide>
          <!-- Optional controls -->
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <Presell />
    </div>
  </div>
</template>

<script>
import Presell from "./Presell";
export default {
  name: "maincontent",
  components: {
    Presell
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 3,
        spaceBetween: 28,
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style>
.current-theme {
  background-image: url("./../../assets/img/theme-bg.png");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
.swiper-container {
  /* height: 404px; */
  width: 100%;
}
.inner-banner {
  position: relative;
  padding: 28px 50px;
  background-image: url("./../../assets/img/banner-bg.png");
}
/* .swiper-button-prev {
  background-image: url("./../assets/img/swiper-prev_03.png");
  left: 0;
  right: auto;
} */
/* .swiper-slide {
  width: 348px; 
} */
.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
