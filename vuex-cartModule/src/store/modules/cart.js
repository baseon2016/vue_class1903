import axios from "axios";
const cart = {
  state: {
    cart: null
  },
  mutations: {
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
    productCart(state, getters, rootState) {
      const productCart =
        state.cart && rootState.products.products.length
          ? state.cart.productById.map(ele => {
              const product = rootState.products.products.find(
                item => item.id === ele
              );
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
};
export default cart;
