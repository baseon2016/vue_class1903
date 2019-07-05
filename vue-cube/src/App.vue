<template>
  <div>
    <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
    <span>{{selectList}}</span>
    <div class="scroll-list-wrap">
      <!-- 组件的ref提供一个方案让父组件获取子组件，在父组件内使用 this.$refs.scroll(ref取名) 可以获取子组件的 方法(methods)或状态(data) -->
      <cube-scroll
        ref="scroll"
        :data="items"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
      >
        <div class="scrollItem" v-for="(item,index) in items" :key="index">{{item}}</div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
const cascadeData = [
  {
    value: "Fruit",
    text: "Fruit",
    children: [
      {
        value: "Apple",
        text: "Apple",
        children: [{ value: 1, text: "One" }, { value: 2, text: "Two" }]
      },
      {
        value: "Orange",
        text: "Orange",
        children: [{ value: 3, text: "Three" }, { value: 4, text: "Four" }]
      }
    ]
  },
  {
    value: "Drink",
    text: "Drink",
    children: [
      {
        value: "Coffee",
        text: "Coffee",
        children: [{ value: 1, text: "One" }, { value: 2, text: "Two" }]
      },
      {
        value: "Tea",
        text: "Tea",
        children: [{ value: 1, text: "One" }, { value: 3, text: "Three" }]
      }
    ]
  }
];
export default {
  name: "app",
  data() {
    return {
      selectList: "",
      items: [
        "😀 😁 😂 🤣 😃 😄 ",
        "🙂 🤗 🤩 🤔 🤨 😐 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "😔 😕 🙃 🤑 😲 ☹️ ",
        "🐣 🐣 🐣 🐣 🐣 🐣 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🐥 🐥 🐥 🐥 🐥 🐥 ",
        "🤓 🤓 🤓 🤓 🤓 🤓 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🦔 🦔 🦔 🦔 🦔 🦔 ",
        "🙈 🙈 🙈 🙈 🙈 🙈 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🚖 🚖 🚖 🚖 🚖 🚖 ",
        "✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 "
      ],
      options: {
        scrollbar: true,
        startY: 0,
        pullDownRefresh: {
          threshold: 70,
          stop: 50,
          txt: "更新成功"
        },
        pullUpLoad: {
          threshold: 70
        }
      }
    };
  },
  mounted() {
    this.cascadePicker = this.$createCascadePicker({
      title: "Cascade Picker",
      data: cascadeData,
      selectedIndex: [0, 0, 0],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    });
  },
  methods: {
    showCascadePicker() {
      this.cascadePicker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - index: ${selectedIndex.join(
          ", "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert"
      }).show();
      this.selectList = selectedVal.join(",");
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000
      }).show();
    },
    onPullingDown() {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.reverse();
        } else {
          // 如果没有新数据，强制刷新结束
          this.$refs.scroll.forceUpdate();
        }
      }, 1000);
    },
    onPullingUp() {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = this.items.slice(3, 6);
          this.items = this.items.concat(newPage);
        } else {
          // 如果没有新数据，强制刷新结束
          this.$refs.scroll.forceUpdate();
        }
      }, 1000);
    }
  }
};
</script>

<style>
.scroll-list-wrap {
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transform: rotate(0deg);
  /* fix 子元素超出边框圆角部分不隐藏的问题 */
  overflow: hidden;
}
.scrollItem {
  padding: 15px 0;
  border-bottom: 1px solid #000;
}
</style>

