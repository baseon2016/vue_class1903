const login = {
  state: {
    hasLogged: false,
    verify: false,
    phone: "18903334607",
    password: "7758258"
  },
  mutations: {
    startVerify(state, payload) {
      if (state.hasLogged === false) {
        state.verify = true;
      } else {
        console.log(payload.$publicUrl);
        payload.$router.push(payload.$publicUrl + "/paycheck");
      }
    },
    verifing(state) {
      if (state.phone === "18903334607" && state.password === "7758258") {
        (state.hasLogged = true), (state.verify = false);
      } else {
        alert("手机号或密码不正确");
      }
    },
    phoneInput(state, payload) {
      state.phone = payload;
    },
    passwordInput(state, payload) {
      state.password = payload;
    }
  }
};
export default login;
