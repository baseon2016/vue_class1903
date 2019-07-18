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
    }
  }
});

export default store;
