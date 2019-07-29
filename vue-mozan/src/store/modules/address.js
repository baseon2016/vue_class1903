const address = {
  state: {
    addresses: [
      {
        id: "addr1",
        addressee: "张三",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: true,
        inUse: true
      },
      {
        id: "addr2",
        addressee: "李四",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr3",
        addressee: "王五",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      }
    ]
  },
  mutations: {
    useWhich(state, payload) {
      state.addresses = state.addresses.map(ele => {
        if (ele.id === payload.id) {
          ele.inUse = true;
        } else {
          ele.inUse = false;
        }
        return ele;
      });
    },
    setDefault(state, payload) {
      state.addresses = state.addresses.map(ele => {
        if (ele.id === payload.id) {
          ele.default = true;
        } else {
          ele.default = false;
        }
        return ele;
      });
    }
  }
};
export default address;
