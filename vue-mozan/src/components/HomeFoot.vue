<template>
  <div class="home-foot">
      <div class="about">
        <h2 class="logo">
          <img src="./../assets/img/logo2.png" />
        </h2>
        <div class="about-info df">
          <div class="info-left">
            <p>
              关注魔赞微信公众号
              <br />获得更多礼包
              <br />魔赞微信号：morethancc
            </p>
            <img src="./../assets/img/bar-code.png" />
          </div>
          <div class="info-right">
            <p>
              关于魔赞 / MORETHAN
              <br />魔赞是开普乐旗下的IP周边专属品牌
              <br />正版授权，原创设计
              <br />超值礼包，一流品质
              <br />这就是魔赞对周边的定义
              <br />这更是魔赞对玩家的承诺
              <br />我们称之为
              <br />「magical & more」
            </p>
          </div>
        </div>
      </div>
      <div class="icp">
        <div class="icp-text">
          <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</p>
          <p>地址：北京市朝阳区建国路93号院4号楼4层505</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'home-foot'
}
</script>

<style>
.home-foot .about {
  background-color: #000;
  padding: 34px 0;
}
.about h2.logo {
  width: 191px;
  margin: 0 auto;
  padding-bottom: 38px;
}
.about .about-info {
  margin: 0 auto;
  width: 420px;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
}
.about-info .info-left {
  text-align: right;
}
.home-foot .icp {
  background-image: url("./../assets/img/main-bg.png");
  color: #707479;
  font-size: 12px;
}
.home-foot .icp .icp-text {
  width: 510px;
  text-align: center;
  margin: 0 auto;
  padding: 27px 0;
}
</style>
