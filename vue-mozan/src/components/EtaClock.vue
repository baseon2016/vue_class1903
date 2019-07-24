<template>
  <div class="deadline">
    <div class="presell-title df">
      <img src="./../assets/img/presell.png" />
      <h3>{{presell.title}}</h3>
    </div>
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
      const clock = setInterval(this.changeDif, 1000);
    } else {
      clearInterval(this.clock);
    }
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
.deadline .deadline-text {
  margin-top: 55px;
  font-size: 14px;
  line-height: 1;
  color: #707378;
}
.deadline-text > span {
  display: block;
  margin-bottom: 6px;
}
.deadline-text .deadline-clock {
  width: 418px;
  /* height: 64px; */
  padding: 8px 0;
  margin-bottom: 17px;
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
.deadline-text .deadline-note {
  margin-top: 16px;
  color: #fff;
}
.deadline-note .warn {
  color: #fdd900;
}
</style>
