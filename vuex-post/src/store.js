import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    comments: []
  },
  mutations: {
    // mutations内不能写异步函数
    getPosts(state, newPosts) {
      state.posts = newPosts;
    },
    getComments(state, comments) {
      state.comments = comments;
    },
    addComment(state, newComment) {
      state.comments.push(newComment);
    }
  },
  // actions 函数用来提交mutations 函数 为什么使用actions提交
  // 因为 actions可以使用异步操作
  // 没有异步一般不需要action
  // actions 函数默认接收一个参数 context(上下文) 这个参数是对象，里面有commit方法，可以触发 mutation 函数
  actions: {
    getPosts(context) {
      axios.get("http://localhost:3008/posts").then(res => {
        context.commit("getPosts", res.data);
      });
    },
    getComments(context, id) {
      axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
        context.commit("getComments", res.data);
      });
    },
    addComment(context, payload) {
      axios
        .post("http://localhost:3008/comments", payload.newReply)
        .then(res => {
          context.commit("addComment", res.data);
          payload.clear();
        });
    }
  }
});
//修改
//组件内要修改 store数据
// 将修改 store的逻辑 在store.js内写好
//mutations 和  actions(有异步操作就需要actions)
//再到组件内使用$store.dispatch 触发 action
