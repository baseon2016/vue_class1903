<template>
  <div class="func">
    <div>
      <span>{{todoNum}} items left</span>
    </div>
    <div class="options">
      <router-link to="/">
        <span :class="{selected:showItem==='all'?true:false}" @click="$emit('all')">All</span>
      </router-link>
      <router-link to="/all">
        <span :class="{selected:showItem==='active'?true:false}" @click="$emit('active')">Active</span>
      </router-link>
      <router-link to="/complete">
        <span
          :class="{selected:showItem==='complete'?true:false}"
          @click="$emit('complete')"
        >Completed</span>
      </router-link>
    </div>
    <div class="clear">
      <span v-show="showClear" @click="$emit('clear')">Clear completed</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "func",
  props: {
    todoNum: {
      type: Number,
      required: true
    },
    showItem: {
      type: String,
      required: true
    },
    showClear: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.func {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.func .options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.func .options span,
.func .clear span {
  cursor: pointer;
}
.func span {
  font-size: 12px;
}
.func .options span {
  padding: 5px;
  border: 1px solid transparent;
}
.func .options span.selected {
  border-color: hotpink;
}
.options span:hover {
  border-color: pink;
}
.func .clear {
  width: 120px;
}
.func .clear span:hover {
  text-decoration: underline;
}
</style>
