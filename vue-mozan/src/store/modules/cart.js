const cart = {
  state: {
    procedure: null
  },
  mutations: {
    transProcedure(state, payload) {
      state.procedure = payload;
    }
  }
};
export default cart;
