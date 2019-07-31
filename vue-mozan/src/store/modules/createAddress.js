const createAddress = {
  state: {
    addNew: false,
    contactName: "",
    contactPhone: "",
    district: "",
    districtDetail: "",
    districtAlias: "",
    newDefault: false
  },
  mutations: {
    closeAddNew(state) {
      state.addNew = false;
    },
    setAddNew(state) {
      state.addNew = true;
    },
    setContactName(state, payload) {
      state.contactName = payload;
    },
    setContactPhone(state, payload) {
      state.contactPhone = payload;
    },
    setDistrict(state, payload) {
      state.district = payload;
    },
    setDistrictDetail(state, payload) {
      state.districtDetail = payload;
    },
    setDistrictAlias(state, payload) {
      state.districtAlias = payload;
    },
    transNewDefault(state) {
      state.newDefault = !state.newDefault;
    },
    createNew(state, payload) {
      let newAddress = {};
      newAddress.id = payload.id;
      newAddress.addressee = state.contactName;
      newAddress.address = state.district + state.districtDetail;
      newAddress.phone = state.contactPhone;
      newAddress.alias = state.districtAlias;
      newAddress.default = state.newDefault;
      newAddress.inUse = false;
      if (payload.addresses.indexOf(ele => ele.id === newAddress.id) === -1) {
        payload.addresses.push(newAddress);
      } else {
        const item = payload.addresses.find(ele => ele.id === newAddress.id);
        item.addressee = newAddress.addressee;
        item.address = newAddress.address;
        item.phone = newAddress.phone;
        item.alias = newAddress.alias;
        item.default = newAddress.default;
      }
      if (newDefault) {
        payload.setDefault(newAddress);
      }
    }
  }
};
export default createAddress;
