<template>
  <div>
    <input ref="first" type="text" v-model="firstName" />
    <input type="text" v-model="lastName" v-focus="true" />
    <input type="text" v-model="fullName" />
    <div>
      <span>{{fullName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newVal) {
        this.firstName = newVal.split(" ")[0];
        this.lastName = newVal.split(" ")[newVal.split(" ").length - 1];
      }
    }
  },
  mounted() {
    // 打开页面自动获取焦点 也可以在元素虚拟标签内添加 autofocus
    // this.$refs.first.focus();
  },
  directives: {
    focus: {
      inserted(el, binding) {
        // 聚焦元素
        if (binding.value) {
          el.focus();
        }
      }
    }
  }
};
</script>

<style>
</style>
