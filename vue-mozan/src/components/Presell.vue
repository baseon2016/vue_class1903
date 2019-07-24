<template>
  <div class="presell">
    <div class="presell-inner df">
      <div class="presell-info">
        <div class="deadline">
          <div class="presell-title df">
            <img src="./../assets/img/presell.png" />
            <h3>{{presell.title}}</h3>
          </div>
          <div class="deadline-text">
            <span>距预售结束</span>
            <div class="deadling-clock">
              <div>
                <span>{{eta.Days}}</span>
                <span class="divider">:</span>
                <span>{{eta.Hours}}</span>
                <span class="divider">:</span>
                <span>{{eta.Minutes}}</span>
                <span class="divider">:</span>
                <span>{{eta.Seconds}}</span>
              </div>
              <div></div>
            </div>
            <span class="deadline-note">
              <span class="warn">注：</span>商品将于
              <span class="warn">2016/10/5</span>统一发货!
            </span>
          </div>
        </div>
        <div>
          <div class="price">
            <span>预售价</span>
            <div>
              <span>{{presell.price.presell}}</span>
              <p>{{presell.price.normal}}</p>
            </div>
          </div>
          <div class="model">
            <span>款式</span>
            <ul>
              <li v-for="item in presell.model" :key="item">{{item}}</li>
            </ul>
          </div>
          <div>
            <span>尺码</span>
            <ul>
              <li v-for="item in presell.size" :key="item">{{item}}</li>
            </ul>
          </div>
          <div>
            <span>数量</span>
            <ul>
              <li>-</li>
              <li>
                <span>{{order.qty}}</span>
              </li>
              <li>+</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "presell",
  computed: {
    ...mapState({
      presell: state => state.presell.presell,
      order: state => state.presell.order
    }),
    ...mapGetters(["eta"])
  },
  methods: {
    ...mapMutations(["changeDif"])
  },
  created() {
    this.changeDif();
    if (this.$store.state.presell.dif > 0) {
      const clock = setInterval(this.changeDif, 1000);
    } else {
      clearInterval(clock);
    }
  }
};
</script>

<style>
.presell {
  background-image: url("./../assets/img/presell-bg.png");
  padding: 30px 50px 100px;
}
.presell .deadline {
  width: 630px;
  height: 306px;
  border-right: 2px solid #707378;
}
.presell .presell-title {
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
  line-height: 1.8;
  color: #707378;
}
.deadline-text .deadline-clock {
  width: 418px;
  height: 64px;
  border-radius: 8px;
  background-color: #707378;
}
.deadline-text .deadline-note {
  margin-top: 16px;
  color: #fff;
}
.deadline-note .warn {
  color: #fdd900;
}
</style>
