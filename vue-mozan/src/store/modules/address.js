const address = {
  state: {
    addresses: [
      {
        id: "addr1",
        addressee: "刘一",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: true,
        inUse: true
      },
      {
        id: "addr2",
        addressee: "陈二",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr3",
        addressee: "张三",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr4",
        addressee: "李四",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr5",
        addressee: "王五",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr6",
        addressee: "赵六",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr7",
        addressee: "孙七",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr8",
        addressee: "周八",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr9",
        addressee: "吴九",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      },
      {
        id: "addr10",
        addressee: "郑十",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭木村9连5区13号",
        phone: "18612345149",
        default: false,
        inUse: false
      }
    ],
    showAddressesQty: 3
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
    },
    showMore(state) {
      state.showAddressesQty = state.showAddressesQty + 3;
    },
    showDefault(state) {
      state.showAddressesQty = 3;
    }
  },
  getters: {
    orderAddress(state) {
      return state.addresses.find(ele => ele.inUse);
    },
    showAddresses(state) {
      return state.addresses.filter(
        (ele, index) => index < state.showAddressesQty
      );
    },
    addressMore(state) {
      return state.addresses.length > state.showAddressesQty;
    }
  }
};
export default address;
