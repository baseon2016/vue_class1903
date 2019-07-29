import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import eta from "./modules/eta";
import order from "./modules/order";
import cart from "./modules/cart";
import login from "./modules/login";
import address from "./modules/address";
import paycheck from "./modules/paycheck";
import calpay from "./modules/calpay";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    eta,
    order,
    cart,
    login,
    address,
    paycheck,
    calpay
  },
  plugins: [createLogger()]
});

export default store;
