import Vue from "vue";
import Vuex from "vuex";
import presell from "./modules/presell";
import eta from "./modules/eta";
import order from "./modules/order";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    presell,
    eta,
    order
  }
});
export default store;
