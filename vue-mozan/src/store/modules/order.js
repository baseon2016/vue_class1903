import Vue from "vue";
const order = {
  state: {
    order: {
      productId: null,
      title: null,
      price: null,
      model: null,
      size: null,
      qty: 1
    },
    select: {}
  },
  mutations: {
    getPresell(state, payload) {
      state.order.productId = payload.id;
      state.order.title = payload.title;
      state.order.price = payload.price;
    },
    transModel(state, payload) {
      state.order.model = payload;
      // state.select.model = payload;
      Vue.set(state.select, "model", payload);
    },
    transSize(state, payload) {
      state.order.size = payload;
      // state.select.size = payload;
      Vue.set(state.select, "size", payload);
    },
    addQty(state) {
      state.order.qty++;
    },
    minusQty(state) {
      state.order.qty--;
    }
  }
};
export default order;
