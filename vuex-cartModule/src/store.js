const store = new Vuex.Store({
  state: {},
  mutations: {
    // 修改本地或state 数据的新增属性 需要确保该属性是响应式的 我这里后台返回值是整个对象 相当于重新赋值 所以未产生如下问题
    // 但是如果返回值是部分数据时，直接对属性进行部分修改，视图不会更新
    // 原因是vue底层不认为直接修改state下的对象和对象属性是更新了。
    // 解决办法一、对对象重新赋值，二、使用官方提供的 set 方法
    // 1.在组件内 this.$set()
    // 2.在组件外 Vue.set()
    // set 的用法  set(state下的某个数据,state对象下的某个属性名,改成什么属性值)
  },
  actions: {},
  getters: {}
});

export default store;
