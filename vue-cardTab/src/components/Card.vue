<template>
  <div>
    <div class="container">
      <div
        v-for="(item,index) in cardArray"
        :class="{card:true,selected:index===selectNum}"
        :key="item.id"
        @click="switchImg(index)"
      >
        <img :src="item.imgSrc">
        <h3>{{item.title}}</h3>
        <a :href="item.desc">{{item.desc}}</a>
      </div>
    </div>
    <div class="showBox">
      <div
        v-for="(item,index) in cardArray"
        :class="{cardShow:true,}"
        v-show="index===selectNum?true:false"
        :key="item.id"
      >
        <img :src="item.imgSrc">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      selectNum: 0
    };
  },
  props: {
    cardArray: {
      type: Array,
      required: true
    }
  },
  methods: {
    switchImg(index) {
      this.selectNum = index;
      console.log(this.selectNum);
    }
  }
};
</script>

<style scoped>
/* 样式标签添加scoped属性，这个样式标签内所有样式虽然是全局的但是所有选择器会添加一个属性选择器 */
/* 类似.card[data-v-xxxxx] 每一个组件xxxxx都是不一样的 */
.card,
.cardShow {
  width: 340px;
  padding: 20px 20px;
  text-align: left;
  text-indent: 10px;
  border: 1px solid #000;
  transition: all 1s;
}
.card img {
  display: block;
  width: 300px;
  user-select: none;
}
.card h3 {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  max-width: 300px;
  margin: 10px 0;
  user-select: none;
}
.card a {
  text-decoration: none;
  display: block;
  font-size: 14px;
  color: #bbb;
  font-weight: lighter;
  max-width: 300px;
  word-wrap: break-word;
}
.card.selected {
  background-color: teal;
}
.cardShow {
  width: 700px;
  border-radius: 10px;
  background-color: red;
  margin: 0 auto;
}
.cardShow img {
  width: 100%;
  border-radius: 10px;
}
</style>
