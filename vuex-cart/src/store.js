import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: null,
    cart: null
  },
  mutations: {
    // 修改本地或state 数据的新增属性 需要确保该属性是响应式的 我这里后台返回值是整个对象 相当于重新赋值 所以未产生如下问题
    // 但是如果返回值是部分数据时，直接对属性进行部分修改，视图不会更新
    // 原因是vue底层不认为直接修改state下的对象和对象属性是更新了。
    // 解决办法一、对对象重新赋值，二、使用官方提供的 set 方法
    // 1.在组件内 this.$set()
    // 2.在组件外 Vue.set()
    // set 的用法  set(state下的某个数据,state对象下的某个属性名,改成什么属性值)
    getProducts(state, payload) {
      state.products = payload;
    },
    getCart(state, payload) {
      state.cart = payload;
    },
    changeCart(state, payload) {
      state.cart = payload;
    },
    addCartQty(state, payload) {
      state.cart.qtyById[payload]++;
    }
  },
  actions: {
    getProducts(context) {
      axios.get("http://localhost:3008/products").then(res => {
        context.commit("getProducts", res.data);
      });
    },
    getCart({ commit }) {
      axios.get("http://localhost:3008/cart").then(res => {
        commit("getCart", res.data);
      });
    },
    addCart(context, payload) {
      axios
        .patch("http://localhost:3008/cart", {
          productById: [...context.state.cart.productById, payload],
          qtyById: { ...context.state.cart.qtyById, [payload]: 1 }
        })
        .then(res => {
          context.commit("changeCart", res.data);
        });
    },
    changeCartQty(context, payload) {
      const newobj = { ...context.state.cart.qtyById };
      if (payload.foo === "add") {
        newobj[payload.id]++;
      } else {
        newobj[payload.id]--;
        if (newobj[payload.id] <= 0) {
          const newCartById = context.state.cart.productById.filter(
            ele => ele != payload.id
          );
          delete newobj[payload.id];
          axios
            .patch("http://localhost:3008/cart", {
              qtyById: newobj,
              productById: newCartById
            })
            .then(res => context.commit("changeCart", res.data));
          return;
        }
      }
      axios
        .patch("http://localhost:3008/cart", {
          qtyById: newobj
        })
        .then(res => context.commit("changeCart", res.data));
    }
  },
  getters: {
    productCart(state) {
      const productCart =
        state.cart && state.products.length
          ? state.cart.productById.map(ele => {
              const product = state.products.find(item => item.id === ele);
              return {
                id: ele,
                title: product.title,
                price: product.price,
                qty: state.cart.qtyById[ele]
              };
            })
          : [];
      return productCart;
    },
    total(state, getters) {
      return getters.productCart.reduce(
        (rst, item) => rst + item.price * item.qty,
        0
      );
    }
  }
});

export default store;
