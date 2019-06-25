<template>
  <div :class="{card:true,selected:bool,show:showBig}">
    <img :src="imgSrc">
    <h3>{{title}}</h3>
    <a :href="desc">{{desc}}</a>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    imgSrc: {
      type: String
    },
    title: {
      type: String
    },
    desc: {
      type: String
    },
    bool: {
      type: Boolean,
      default: false
    },
    showBig: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
/* 样式标签添加scoped属性，这个样式标签内所有样式虽然是全局的但是所有选择器会添加一个属性选择器 */
/* 类似.card[data-v-xxxxx] 每一个组件xxxxx都是不一样的 */
.card {
  width: 340px;
  padding: 20px 20px;
  text-align: left;
  text-indent: 10px;
  border: 1px solid #000;
  transition: all 1s;
}
.card.show {
  width: 700px;
  border-radius: 10px;
  background-color: red;
}
.card img {
  display: block;
  width: 300px;
  user-select: none;
}
.card.show img {
  width: 100%;
  border-radius: 10px;
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
</style>
