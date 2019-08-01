const createAddress = {
  state: {
    addNew: false,
    editId: null,
    contactName: "",
    contactPhone: "",
    district: "",
    districtDetail: "",
    districtAlias: "",
    newDefault: false,
    inUse: null
  },
  mutations: {
    closeAddNew(state) {
      state.addNew = false;
      state.editId = null;
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

      newAddress.id = state.editId || payload.id;
      newAddress.addressee = state.contactName;
      newAddress.address = state.district + state.districtDetail;
      newAddress.phone = state.contactPhone;
      newAddress.alias = state.districtAlias;
      newAddress.default = state.newDefault;
      newAddress.inUse = state.inUse || false;
      console.log(newAddress.id);
      console.log(payload.addresses.find(ele => ele.id === newAddress.id));
      if (!payload.addresses.find(ele => ele.id === newAddress.id)) {
        payload.addresses.push(newAddress);
      } else {
        const item = payload.addresses.find(ele => ele.id === newAddress.id);
        item.addressee = newAddress.addressee;
        item.address = newAddress.address;
        item.phone = newAddress.phone;
        item.alias = newAddress.alias;
        item.default = newAddress.default;
      }
      if (state.newDefault) {
        payload.setDefault(newAddress);
      }
      state.addNew = false;
      state.editId = null;
    },
    editNew(state, payload) {
      state.editId = payload.id;
      state.contactName = payload.addressee;
      state.district = "";
      state.districtDetail = payload.address;
      state.contactPhone = payload.phone;
      state.districtAlias = payload.alias;
      state.newDefault = payload.default;
      state.inUse = payload.inUse;
      state.addNew = true;
    }
  }
};
export default createAddress;
