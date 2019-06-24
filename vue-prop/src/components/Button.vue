<template>
  <!-- 对象内属性名和变量名一致的时候，调用变量需要加[]。而在对象内属性值需要调用变量的时候，不需要[] -->
  <!-- 对象的方法绑定class(看下面生效的写法) -->
  <!-- :class="['btn',type]" 数组的方法绑定class-->
  <!-- :style="{backgroundColor:color||'white'}" 添加绑定默认样式-->
  <button :class="{[type]:true,btn:true}">{{text?text:'默认按钮'}}</button>
</template>

<script>
export default {
  name: "btn",
  // 子组件的props禁止修改
  // props: ["text", "type", "color"]
  // props写成对象形式就是为了做属性检查
  props: {
    text: {
      type: string,
      default: "默认按钮"
    },
    type: {
      // type的值必须从login signup more中选择一个
      //验证父组件传过来的值是否满足条件，不满足报错
      validator: function(value) {
        return [login, signup, more].indexOf(value) !== -1;
      }
      //无需默认值可以不设置default
    }
  }
};
</script>

<style>
.btn.submit {
  background-color: red;
}
.btn.more {
  background-color: green;
}
</style>
