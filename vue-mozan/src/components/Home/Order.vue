<template>
  <div class="order">
    <div class="price df">
      <span class="tag">预售价</span>
      <div class="value">
        <strong>
          ￥
          <span>{{presell.price.presell.toFixed(2)}}</span>
        </strong>
        <p class="origin-value">
          正价:
          <span>
            ￥
            {{presell.price.normal.toFixed(2)}}
          </span>
        </p>
      </div>
    </div>
    <div class="model df">
      <span class="tag">款式</span>
      <ul class="df">
        <li
          :class="{item:true,active:select.model===item?true:false,wrapmgb:presell.model.length>4}"
          v-for="item in presell.model"
          :key="item"
          @click="pickModel(item)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="size df">
      <span class="tag">尺码</span>
      <ul class="df">
        <li
          :class="{'size-item':true,active:select.size===item?true:false,wrapmgb:presell.size.length>4}"
          v-for="item in presell.size"
          :key="item"
          @click="pickSize(item)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="qty df">
      <span class="tag">数量</span>
      <ul class="df">
        <li class="btn" @click="del">-</li>
        <li>
          <span class="qty">{{order.qty}}</span>
        </li>
        <li class="btn" @click="add">+</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "order",
  computed: {
    ...mapState({
      presell: state => state.eta.presell,
      order: state => state.order.order,
      select: state => state.order.select
    })
  },
  methods: {
    ...mapMutations([
      "getPresell",
      "transModel",
      "transSize",
      "addQty",
      "minusQty"
    ]),
    pickModel(item) {
      this.transModel(item);
    },
    pickSize(item) {
      this.transSize(item);
    },
    add() {
      this.addQty();
    },
    del() {
      if (this.order.qty > 1) {
        this.minusQty();
      } else {
        event.target.disabled = true;
      }
    }
  },
  created() {
    this.getPresell(this.presell);
  }
};
</script>

<style>
.order {
  width: 468px;
  padding-left: 50px;
}
.price,
.model,
.size,
.qty {
  margin: 15px 0;
  align-items: flex-start;
}

.order span.tag {
  flex-shrink: 0;
  display: block;
  width: 64px;
  height: 26px;
  border-radius: 9px;
  background-color: #fff;
  color: #000;
  text-align: center;
  margin-right: 30px;
}

span.tag {
  align-items: flex-start;
}

.price .value strong {
  font-size: 24px;
  color: #fdd900;
}
.price .value strong > span {
  font-size: 36px;
}
.price .value p.origin-value {
  font-size: 18px;
  color: #fff;
}
.price .value p.origin-value > span {
  text-decoration: line-through;
}
.model ul,
.size ul {
  flex-wrap: wrap;
}
.model ul > li.wrapmgb,
.size ul > li.wrapmgb {
  margin-bottom: 5px;
}
.qty ul {
  width: 324px;
  justify-content: space-between;
}
.item {
  font-size: 14px;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 9px;
  cursor: pointer;
  user-select: none;
  margin-right: 5px;
}
.size-item {
  width: 65px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border: 1px solid #fff;
  border-radius: 9px;
  cursor: pointer;
  user-select: none;
  margin-right: 5px;
}
.btn {
  display: block;
  font-size: 24px;
  color: #fff;
  text-align: center;
  padding: 5px 30px;
  border: 1px solid #fff;
  border-radius: 9px;
  cursor: pointer;
  user-select: none;
}
.qty span.qty {
  color: #fff;
  font-size: 18px;
}
.item.active,
.size-item.active {
  color: #fdd900;
  border-color: #fdd900;
}
</style>
