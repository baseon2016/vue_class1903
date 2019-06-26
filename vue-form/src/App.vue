<template>
  <div>
    <div>
      <h1>vue 表单操作</h1>
    </div>
    <div>
      <!-- vue @input事件域的内容发生变化就触发 -->
      <!-- vue @change事件失去焦点时触发 -->
      <!-- <input @input="changeVal($event)" type="text" :value="val"> -->
      <!-- vue v-model功能绑定表单元素和变量 -->
      <input type="text" v-model="val">
      <button @click="submit">提交</button>
    </div>
    <div>
      <!-- 多选按钮 -->
      <h2>调查问卷</h2>
      <p>请问你喜欢下面哪种水果</p>
      <div>
        <input id="one" value="榴莲1" type="checkbox" v-model="checkFruits">
        <label for="one">榴莲1</label>
        <input id="two" value="榴莲2" type="checkbox" v-model="checkFruits">
        <label for="two">榴莲2</label>
        <input id="three" value="榴莲3" type="checkbox" v-model="checkFruits">
        <label for="three">榴莲3</label>
      </div>
      <p>查看结果:{{checkFruits}}</p>
    </div>
    <div>
      <!-- 单选按钮 -->
      <h2>单选按钮</h2>
      <input id="radio1" value="男" type="radio" v-model="sex">
      <label for="radio1">男</label>
      <input id="radio2" value="女" type="radio" v-model="sex">
      <label for="radio2">女</label>
      <p>选中了:{{sex}}</p>
    </div>
    <div>
      <!-- 选择框select -->
      <h2>选择框</h2>
      <select v-model="selectedVal" multiple>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>{{selectedVal}}</p>
    </div>

    <!-- 修饰符 -->
    <h2>修饰符</h2>
    <!-- v-model 表单修饰符 .lazy(input事件触发变更为change事件,失去焦点才触发) .number(自动将用户的输入值转为数值类型) .trim(如果要自动过滤用户输入的首尾空白字符) -->

    <!-- v-on 事件修饰符 .stop(阻止事件冒泡) .prevent(阻止默认行为) .self(event.target 是当前元素自身时触发处理函数) .once(点击事件将只会触发一次) -->
    <!-- 按键修饰符 绑定的是键盘事件 .enter .13 -->

    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
    <input v-on:keyup.enter="submit">
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      val: "123",
      checkFruits: [],
      sex: "",
      selectedVal: []
    };
  },
  methods: {
    // 如果事件函数内需要使用event,在函数声明的时候定义一个event参数,在调用的时候传递$event
    //不传递并且在函数声明时不添加参数直接使用event也可以

    changeVal() {
      // 获取输入框内容.value， 使用event.target获取触发事件的对象
      this.val = event.target.value;
    },
    submit() {
      console.log(this.val);
    }
  }
};
</script>

<style>
</style>
