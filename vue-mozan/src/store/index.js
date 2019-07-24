import Vue from "vue";
import Vuex from "vuex";
import presell from "./modules/presell";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    presell
  }
});
export default store;
