import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import eta from "./modules/eta";
import order from "./modules/order";
import cart from "./modules/cart";
import login from "./modules/login";
import address from "./modules/address";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    eta,
    order,
    cart,
    login,
    address
  },
  plugins: [createLogger()]
});

export default store;
