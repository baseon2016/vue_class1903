const pay = {
  state: {
    payMethod: "ali",
    tipping: false
  },
  mutations: {
    transPayMethod(state, payload) {
      state.payMethod = payload;
    },
    scanTipping(state) {
      state.tipping = true;
    },
    closeTipping(state) {
      state.tipping = false;
    }
  }
};
export default pay;
