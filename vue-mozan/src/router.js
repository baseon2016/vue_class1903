import Vue from "vue";
import VueRouter from "vue-router";
import PUBLICURL from "./publicPath";

import Main from "./components/Home/Main";
import AddtoCart from "./components/AddtoCart";
import Cart from "./components/Cart/Cart";
import Paycheck from "./components/Paycheck/Paycheck";
import Pay from "./components/Pay/Pay";
import PayContent from "./components/Pay/PayContent";
import PayMethods from "./components/Pay/PayMethods";
import Scan from "./components/Pay/Scan";
import PaySuccess from "./components/Pay/PaySuccess";
Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: PUBLICURL + "/", component: Main },
    { path: PUBLICURL + "/addtocart", component: AddtoCart },
    { path: PUBLICURL + "/cart", component: Cart },
    { path: PUBLICURL + "/paycheck", component: Paycheck },
    {
      path: PUBLICURL + "/pay",
      component: Pay,
      children: [
        {
          path: "",
          component: PayContent,
          children: [
            {
              path: "",
              component: PayMethods
            },
            {
              path: "paymethods",
              component: PayMethods
            },
            {
              path: "scan",
              component: Scan
            }
          ]
        },
        {
          path: "paysuccess",
          component: PaySuccess
        }
      ]
    }
  ]
});
