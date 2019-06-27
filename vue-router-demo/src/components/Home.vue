<template>
  <div class="home">
    <div class="container">
      <div class="tabs">
        <div
          v-for="(item,index) in cardList"
          :key="item.id"
          :class="{active:index===activeNum,tab:true}"
          @click="change(index)"
        >
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
        </div>
        <div
          :style="{width:100/cardList.length + '%',left:activeNum*(100/cardList.length)+'%'}"
          class="line"
        ></div>
      </div>
      <div class="content">
        <transition-group name="fade" tag="div" class="content-inner">
          <img
            v-for="(item,index) in cardList"
            :key="item.id"
            :src="item.imgSrc"
            v-show="index===activeNum"
          >
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      activeNum: 0,
      cardList: [
        {
          id: "card01",
          imgSrc:
            "http://cms-bucket.ws.126.net/2019/06/24/64dc6f507c734a6e8bf811ad07051746.jpeg?imageView&thumbnail=850y430&quality=85",
          title: "大幂幂来搞事了 穿吊带短裙大秀美背筷子腿",
          desc:
            "http://lady.163.com/photoview/00A70026/115895.html#p=EIE0EV9100A70026NOS"
        },
        {
          id: "card02",
          imgSrc:
            "http://cms-bucket.ws.126.net/2019/06/24/6ee9822415f145c69420caca9fd035e8.jpeg?imageView&thumbnail=850y430&quality=85",
          title: "47岁袁咏仪穿深V高衩裙 长腿惹眼颜值依旧能打",
          desc:
            "http://lady.163.com/photoview/00A70026/115893.html#p=EIDVGGGC00A70026NOS"
        },
        {
          id: "card03",
          imgSrc:
            "http://cms-bucket.ws.126.net/2019/06/24/b4a5adbd9bdd4bbb8c5870573b2f200a.png?imageView&thumbnail=850y430&quality=85",
          title: "没有人可以永远年轻 但萧亚轩的男朋友可以",
          desc: "https://lady.163.com/19/0624/10/EIE99FIE00267VQQ.html"
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.activeNum = index;
    }
  }
};
</script>

<style scoped>
.home {
  width: 90%;
  margin: 0 auto;
}
.home .container {
  width: 50%;
  margin: 0 auto;
}
.home .tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.home .tabs .line {
  height: 5px;
  background: rgba(187, 35, 8, 0.863);
  position: absolute;
  bottom: 0;
  transition: all 0.5s;
}
.home .tabs .tab.active {
  background-color: pink;
}
.home .tabs .tab p {
  max-width: 200px;
  word-wrap: break-word;
}
.home .content {
  margin-top: 20px;
  background-color: rgb(32, 133, 235);
  padding: 15px;
  border-radius: 10px;
}
.home .content .content-inner {
  position: relative;
  height: 307px;
}
.home .content img {
  display: block;
  width: 100%;
  border-radius: 15px;
  position: absolute;
  left: 0;
  top: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
