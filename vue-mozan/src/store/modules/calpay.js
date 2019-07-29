const calpay = {
  state: {
    coupon: 0
  },
  getters: {
    calpay(state, getters, rootState, rootGetters) {
      const selectCart = rootGetters.selectCart;
      const calCart = selectCart.map(ele => {
        let reItem = {};
        reItem.productId = ele.productId;
        reItem.qty = ele.qty;
        reItem.price = ele.presell ? ele.price.presell : ele.price.normal;
        reItem.subtotal = reItem.price * reItem.qty;
        return reItem;
      });
      return calCart;
    },
    shippingCost(state, getters, rootState) {
      return rootState.paycheck.options.logisticMode ? 10 : 0;
    },
    acturalTotalCost(state, getters) {
      return getters.calpay.reduce(
        (accumulator, ele) => accumulator + ele.subtotal,
        0
      );
    },
    acturalPay(state, getters) {
      return getters.acturalTotalCost - state.coupon + getters.shippingCost;
    }
  }
};
export default calpay;
