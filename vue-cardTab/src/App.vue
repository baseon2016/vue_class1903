<template>
  <div>
    <Card :cardArray="cardList"/>
  </div>
</template>

<script>
import Card from "./components/Card";
export default {
  name: "app",
  components: {
    Card
  },
  data() {
    return {
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
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
