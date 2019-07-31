<template>
  <div class="deadline">
    <div class="presell-title df">
      <img src="./../../assets/img/presell.png" />
      <h3>{{presell.title}}</h3>
    </div>
    <div class="deadline-block df mt-55">
      <div class="deadline-text">
        <span>距预售结束</span>
        <div class="deadline-clock">
          <div class="df">
            <span>{{eta.Days}}</span>
            <span class="divider">:</span>
            <span>{{eta.Hours}}</span>
            <span class="divider">:</span>
            <span>{{eta.Minutes}}</span>
            <span class="divider">:</span>
            <span>{{eta.Seconds}}</span>
          </div>
          <div class="df">
            <span>天</span>
            <span>时</span>
            <span>分</span>
            <span>秒</span>
          </div>
        </div>
      </div>
      <div class="zone">
        <span>相关专区</span>
        <div class="over-watch">
          <img src="./../../assets/img/over-watch.png" />
        </div>
      </div>
    </div>
    <div class="pt-10 deadline-block df">
      <div class="share df">
        <span class="wish">
          <img src="./../../assets/img/wish.png" /> 添加到愿望单
        </span>
        <div class="share-info df">
          <span>分享</span>
          <img src="./../../assets/img/share1.png" />
          <img src="./../../assets/img/share2.png" />
        </div>
      </div>
      <span class="deadline-note">
        <span class="warn">注：</span>商品将于
        <span class="warn">2016/10/5</span>统一发货!
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "clock",
  computed: {
    ...mapState({
      presell: state => state.eta.presell
    }),
    ...mapGetters(["eta"])
  },
  methods: {
    ...mapMutations(["changeDif"])
  },
  created() {
    this.changeDif();
    if (this.$store.state.eta.dif > 0) {
      this.clock = setInterval(this.changeDif, 1000);
    } else {
      clearInterval(this.clock);
    }
  },
  beforeDestroy() {
    clearInterval(this.clock);
  }
};
</script>

<style>
.deadline {
  width: 630px;
  height: 306px;
  border-right: 2px solid #707378;
}
.presell-title {
  align-items: flex-start;
}
.presell-title h3 {
  font-size: 36px;
  font-family: Microsoft YaHei;
  color: #fff;
  max-width: 396px;
  margin-left: 30px;
}
.deadline .deadline-block {
  width: 580px;
  justify-content: space-between;
  align-items: flex-start;
}
.deadline .deadline-text,
.deadline .zone {
  font-size: 14px;
  line-height: 1;
  color: #707378;
}
.deadline-text > span,
.zone > span {
  display: block;
  margin-bottom: 6px;
}
.deadline-text .deadline-clock {
  width: 418px;
  /* height: 64px; */
  padding: 8px 0;
  border-radius: 8px;
  background-color: #707378;
}
.deadline-clock span {
  display: block;
  color: #fdd900;
}
.deadline-clock div:first-child span {
  font-size: 44px;
}
.deadline-clock div {
  justify-content: space-around;
}
.zone .over-watch {
  width: 151px;
  height: 64px;
  border-radius: 9px;
  overflow: hidden;
}
.zone .over-watch > img {
  width: 100%;
  display: block;
}
.share {
  font-size: 12px;
}
.deadline-note {
  font-size: 14px;
}
.deadline-note,
.share {
  color: #fff;
}
.share span.wish {
  display: block;
  width: 115px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid #fff;
  text-align: center;
}
.share span.wish > img {
  vertical-align: middle;
}
.share-info {
  width: 71px;
  margin-left: 15px;
  justify-content: space-between;
}
.deadline-note .warn {
  color: #fdd900;
}

.pt-10 {
  padding-top: 10px;
}
.mt-55 {
  margin-top: 55px;
}
</style>
