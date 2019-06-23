<template>
  <div class="banner df">
    <div class="bigImg">
      <div v-for="item in bannerShow" v-show="item.show" :key="item.id">
        <img :src="item.bigImg">
      </div>
      <div></div>
    </div>
    <div class="banner-list">
      <div
        v-for="item in banner"
        :class="{selected:item.isSelected,'banner-item':true,df:true}"
        :key="item.id"
      >
        <div class="banner-inner df">
          <div>
            <img :src="item.imgSrc">
          </div>
          <div>
            <span>{{item.category}}</span>
            <span>{{item.year}}</span>
            <span>{{item.price}}</span>
          </div>
          <div>
            <span>{{item.material}}</span>
            <span>{{item.bedroom}}</span>
            <span>{{item.washroom}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      bannerShow: [
        { id: "show01", bigImg: "./../assets/images/big-img1.jpg", show: true },
        {
          id: "show02",
          bigImg: "./../assets/images/big-img2.jpg",
          show: false
        },
        { id: "show03", bigImg: "./../assets/images/big-img3.jpg", show: false }
      ],
      banner: [
        {
          id: "banner01",
          imgSrc: "./../assets/images/f_thumb1.png",
          category: "Villa",
          year: "2007 year",
          price: "5000 sq.ft",
          material: "Brick, glass",
          bedroom: "3 beds",
          washroom: "2 baths",
          isSelected: true
        },
        {
          id: "banner02",
          imgSrc: "./../assets/images/f_thumb2.png",
          category: "Villa",
          year: "2009 year",
          price: "3500 sq.ft",
          material: "Brick, glass",
          bedroom: "5 beds",
          washroom: "3 baths",
          isSelected: false
        },
        {
          id: "banner03",
          imgSrc: "./../assets/images/f_thumb3.png",
          category: "Villa",
          year: "2010 year",
          price: "4200 sq.ft",
          material: "Brick, glass",
          bedroom: "4 beds",
          washroom: "3 baths",
          isSelected: false
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.banner {
  justify-content: space-between;
  align-items: center;
}
.banner .bigImg {
  padding: 10px 10px;
  border-radius: 5px;
  background-image: url("./../assets/images/img-wrapper-bg.jpg");
}
.banner .banner-list {
  background-image: url("./../assets/images/pagination-splash.gif");
}
.banner-list .banner-inner {
  width: 80%;
  border-bottom: 1px dashed #4b4b4b;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px 0;
}
.banner-list .banner-inner span {
  display: block;
  font-size: 16px;
  font-weight: lighter;
  line-height: 1.8;
  width: 100px;
  color: #fff;
  word-wrap: none;
}
</style>
