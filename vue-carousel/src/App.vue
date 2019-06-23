<template>
  <div>
    <div class="carousel">
      <div class="img">
        <img v-for="item in carouselImg" :key="item.id" :src="item.imgSrc" v-show="item.show">
      </div>
      <div class="next">下一个</div>
      <div class="pre">上一个</div>
      <div class="pagination">
        <ul>
          <li v-for="item in carouselImg" :key="item.id">
            <a @click="handleClick" href="javascript:void(0)"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      carouselImg: [
        {
          id: "img01",
          show: true,
          imgSrc:
            "https://imgcps.jd.com/ling/3343742/5bm05Lit5bCW6LSn55av5oqi/54iG5qy-5L2O6IezOS455YWD/t-5bda9cd0ba82b80306af795a/71cdf190.jpg"
        },
        {
          id: "img02",
          show: false,
          imgSrc:
            "https://img1.360buyimg.com/da/s590x470_jfs/t22600/243/2629537966/88661/7819260e/5b87ea89N0c3a293a.jpg!q90!cc_590x470.webp"
        },
        {
          id: "img03",
          show: false,
          imgSrc:
            "https://img1.360buyimg.com/da/s590x470_jfs/t1/37081/25/2708/69964/5cbb41afEf5541640/6be8ee5b079df4e5.jpg!q90!cc_590x470.webp"
        },
        {
          id: "img04",
          show: false,
          imgSrc:
            "https://imgcps.jd.com/ling/3735721/5o6i57Si5paw5aWH54m55LmL5peF/54iG5qy-55u06ZmN/t-5bd91884bcf6c7034d251e9d/def4791c.jpg"
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log(this);
    }
  }
};
var list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  list[i].dataInd = i;
  console.log(list[i]);
}
</script>

<style>
.carousel {
  width: 590px;
  margin: 0 auto;
  position: relative;
}
.img {
  width: 590px;
}
.pagination {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  width: 100px;
}
.pagination ul {
  display: flex;
  justify-content: space-between;
  /* 副轴对齐方式 */
  align-items: center;
}
.pagination a {
  display: block;
  width: 10px;
  height: 10px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
.next,
.pre {
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* width: 50px; */
  padding: 30px 0;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
}
.pre {
  left: 0;
}
.next {
  right: 0;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
* {
  box-sizing: border-box;
}
</style>
