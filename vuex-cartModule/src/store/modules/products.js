import axios from "axios";
const products = {
  state: {
    products: null
  },
  mutations: {
    getProducts(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    getProducts(context) {
      axios.get("http://localhost:3008/products").then(res => {
        context.commit("getProducts", res.data);
      });
    }
  },
  getters: {}
};
export default products;
