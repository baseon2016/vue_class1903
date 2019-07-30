const paycheck = {
  state: {
    options: {
      payMode: true,
      logisticMode: true,
      receipt: false
    },
    receiptFor: null,
    notes: null
  },
  mutations: {
    selectPayMode(state) {
      state.options.payMode = !state.options.payMode;
    },
    selectLogisticMode(state) {
      state.options.logisticMode = !state.options.logisticMode;
    },
    selectReceipt(state, payload) {
      state.options.receipt = payload;
    },
    receiptForText(state, payload) {
      state.receiptFor = payload;
    }
  }
};
export default paycheck;
