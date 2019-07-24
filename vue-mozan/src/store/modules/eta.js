import moment from "moment";
const eta = {
  state: {
    presell: {
      id: "1",
      title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
      deadline: moment().endOf("week"),
      price: {
        normal: 960,
        presell: 700
      },
      model: ["iPhone 5", "iPhone 6", "iPhone 6+"],
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"]
    },
    dif: null
  },
  mutations: {
    changeDif(state) {
      const now = moment().format();
      state.dif = parseInt(state.presell.deadline.diff(now) / 1000);
    }
  },
  getters: {
    eta(state) {
      let Days = Math.floor(state.dif / 86400);
      let Hours = Math.floor((state.dif % 86400) / 3600);
      let Minutes = Math.floor((state.dif % 3600) / 60);
      let Seconds = Math.floor(state.dif % 60);
      if (state.dif > 0) {
        if (Days < 10) {
          Days = "0" + Days;
        }
        if (Hours < 10) {
          Hours = "0" + Hours;
        }
        if (Minutes < 10) {
          Minutes = "0" + Minutes;
        }
        if (Seconds < 10) {
          Seconds = "0" + Seconds;
        }
      } else {
        Days = "00";
        Hours = "00";
        Minutes = "00";
        Seconds = "00";
      }
      return { Days, Hours, Minutes, Seconds };
    }
  }
};
export default eta;
