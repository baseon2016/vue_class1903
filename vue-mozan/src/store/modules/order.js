import Vue from "vue";
const order = {
  state: {
    order: {
      productId: null,
      title: null,
      price: null,
      model: null,
      size: null,
      qty: 1,
      isCheck: true,
      storage: 5,
      ban: false,
      presell: true
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
    },
    canOrder(state, payload) {
      if (state.order.model && state.order.size) {
        payload.$router.push(payload.$publicUrl + "/addtocart");
      } else {
        alert("未选择订购信息,请完成订购信息");
      }
    }
  }
};
export default order;
