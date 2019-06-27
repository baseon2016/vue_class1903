<template>
  <div class="comment">
    <p>用户评论{{commentNum}}</p>
    <transition-group name="bounce" tag="ul">
      <li v-for="item in comments" :key="item.id">
        {{item.content}}
        <Button @btnFun="$emit('comment',item.id)" btnText="删除"/>
      </li>
    </transition-group>
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
    },
    commentNum: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.comment {
  width: 90%;
  margin: 0 auto;
}
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
/* .list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
{
  opacity: 0;
  transform: translateX(30px);
} */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
