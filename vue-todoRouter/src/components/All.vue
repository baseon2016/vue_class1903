<template>
  <div>
    <ul>
      <li
        v-for="item in todoListR"
        :key="item.id"
        @mouseenter="item.showDel=true"
        @mouseleave="item.showDel=false"
      >
        <span
          :class="{select:true,selected:item.complete===true}"
          @click="item.complete=!item.complete"
        ></span>
        <span :class="{content:true,selected:item.complete===true}">{{item.content}}</span>
        <span class="del" @click="del(item.id)" v-show="item.showDel">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "all",
  props: {
    todoListR: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
