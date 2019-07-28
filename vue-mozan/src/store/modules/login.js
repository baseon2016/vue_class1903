const login = {
  state: {
    verify: false
  },
  mutations: {
    startVerify(state) {
      state.verify = true;
    }
  }
};
export default login;
