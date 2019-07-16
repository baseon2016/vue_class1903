import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // state就是状态
    num: 0
  },
  // mutations  修改state的方法
  mutations: {
    //add 定义的是修改state中 num 数据的方法 mutations函数默认接收一个参数 state(上面定义好的共享参数)，直接对数据下的某条数据进行修改就是修改了共享数据
    add(state) {
      state.num++;
    },
    minus(state) {
      state.num--;
    },
    //mutations 函数创建的手只能传两个参数，其中第一个必须是state,第二个是载荷数据，不能传递第三个参数，所以说组件内调用mutations函数时候想要传递多个参数是不行的，只能把多个参数合并成对象传递
    changeNum(state, payload) {
      state.num = payload.num1 + payload.num2;
    }
  }
});

export default store;
