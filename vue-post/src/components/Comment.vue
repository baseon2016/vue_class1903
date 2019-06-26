<template>
  <div class="comment">
    <ul>
      <li v-for="item in comments" :key="item.id">
        {{item.content}}
        <!-- <button @click="delComment(item.id)">删除</button> -->
        <Button @btnFun="$emit('comment',item.id)" btnText="删除"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "comment",
  components: {
    Button
  },

  props: {
    comments: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.comment ul {
  padding: 0;
}
.comment ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #acdcac;
  padding: 5px 10px;
  margin: 5px 0;
}
</style>
