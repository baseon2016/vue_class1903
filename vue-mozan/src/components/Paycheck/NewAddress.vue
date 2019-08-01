<template>
  <div :class="{'newaddress-wrap':true,addnew:addNew}">
    <div class="newaddress">
      <div class="newaddress-inner">
        <div class="newaddress-top df">
          <span>新增地址</span>
          <span class="click-bar" @click="closeAddNew">x</span>
        </div>
        <div class="newaddress-content">
          <div class="newaddress-contact df">
            <div class="contact-name">
              <div class="newaddress-title df">
                <span>
                  <span class="required">*</span>收货人
                </span>
                <span class="required">请填写收货人!</span>
              </div>
              <div>
                <input type="text" v-model="contactName" />
              </div>
            </div>
            <div class="contact-phone">
              <div class="newaddress-title df">
                <span>
                  <span class="required">*</span>联系电话
                </span>
                <span class="required">填写的手机号格式错误!</span>
              </div>
              <div>
                <input type="text" v-model="contactPhone" />
              </div>
            </div>
          </div>
          <div class="newaddress-district">
            <div class="newaddress-title df">
              <span>
                <span class="required">*</span>所在地区
              </span>
              <span class="required">请填写完整的所在地区!</span>
            </div>
            <div>
              <v-distpicker @selected="sel"></v-distpicker>
            </div>
          </div>
          <div class="newaddress-detail">
            <div class="newaddress-title df">
              <span>
                <span class="required">*</span>详细地址
              </span>
              <span class="required">请填写详细地址!</span>
            </div>
            <div>
              <input type="text" v-model="districtDetail" />
            </div>
          </div>
          <div class="newaddress-alias df">
            <div class="alias">
              <div>
                <span>地址别名</span>
              </div>
              <div>
                <input type="text" v-model="districtAlias" />
              </div>
            </div>
            <div class="usual">
              <div>
                <span>常用别名</span>
              </div>
              <div class="usual-alias df">
                <span @click="setDistrictAlias('家')">家</span>
                <span @click="setDistrictAlias('公司')">公司</span>
                <span @click="setDistrictAlias('父母家')">父母家</span>
              </div>
            </div>
          </div>
        </div>
        <div class="newaddress-foot df">
          <div class="df" @click="transNewDefault">
            <Checker :checking="newDefault" />
            <span class="set-default click-bar">设为默认地址</span>
          </div>
          <span
            class="btn-route click-bar"
            @click="createNew({id:Date.now(),addresses,setDefault})"
          >保存地址</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checker from "./../Checker";
import VDistpicker from "v-distpicker";
import { mapState, mapMutations } from "vuex";
export default {
  name: "newaddress",
  components: {
    Checker,
    VDistpicker
  },
  computed: {
    ...mapState({
      addresses: state => state.address.addresses,
      addNew: state => state.createAddress.addNew,
      contactName: state => state.createAddress.contactName,
      contactPhone: state => state.createAddress.contactPhone,
      district: state => state.createAddress.district,
      districtDetail: state => state.createAddress.districtDetail,
      districtAlias: state => state.createAddress.districtAlias,
      newDefault: state => state.createAddress.newDefault
    }),
    contactName: {
      get() {
        return this.$store.state.createAddress.contactName;
      },
      set(payload) {
        this.setContactName(payload);
      }
    },
    contactPhone: {
      get() {
        return this.$store.state.createAddress.contactPhone;
      },
      set(payload) {
        this.setContactPhone(payload);
      }
    },
    // district: {
    //   get() {
    //     return this.$store.state.createAddress.district;
    //   },
    //   set(payload) {
    //     this.setDistrict(payload);
    //   }
    // },
    districtDetail: {
      get() {
        return this.$store.state.createAddress.districtDetail;
      },
      set(payload) {
        this.setDistrictDetail(payload);
      }
    },
    districtAlias: {
      get() {
        return this.$store.state.createAddress.districtAlias;
      },
      set(payload) {
        this.setDistrictAlias(payload);
      }
    }
  },
  methods: {
    ...mapMutations([
      "closeAddNew",
      "createNew",
      "setContactName",
      "setContactPhone",
      "setDistrict",
      "setDistrictDetail",
      "setDistrictAlias",
      "transNewDefault",
      "setDefault"
    ]),
    sel: function(data) {
      this.citydata = data.province.value + data.city.value + data.area.value;
      this.setDistrict(this.citydata);
      console.log(this.citydata);
    }
  }
};
</script>

<style>
.newaddress-wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
}
.newaddress-wrap.addnew {
  display: block;
}
.newaddress-wrap .newaddress {
  width: 690px;
  height: 420px;
  position: absolute;
  left: 50%;
  top: 400px;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.newaddress .newaddress-inner {
  padding: 0 20px;
  width: 100%;
}
.newaddress .newaddress-top {
  justify-content: space-between;
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid #000;
}
.newaddress-content {
  padding: 20px 0;
}
.newaddress-content span {
  font-size: 14px;
  line-height: 1.5;
}
.newaddress-content span.required {
  color: #f20000;
}
.newaddress-content input {
  width: 100%;
  border: 1px solid #babec9;
  outline: 0;
  line-height: 22px;
  padding-left: 10px;
}
.newaddress-district,
.newaddress-detail,
.newaddress-alias {
  margin-top: 12px;
}
.newaddress-content .newaddress-title {
  justify-content: space-between;
}
.newaddress-content .newaddress-contact {
  justify-content: space-between;
}
.newaddress-contact .contact-name {
  width: 210px;
}
.newaddress-contact .contact-phone {
  width: 432px;
}
.newaddress-content .newaddress-alias {
  justify-content: space-between;
}
.newaddress-alias .alias {
  width: 430px;
}
.newaddress-alias .usual {
  width: 210px;
}
.newaddress-alias .usual-alias {
  justify-content: space-between;
}
.newaddress-alias .usual-alias span {
  display: block;
  width: 68px;
  line-height: 24px;
  border: 1px solid #babec9;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.newaddress-foot {
  font-size: 14px;
  text-align: center;
  padding: 10px 0 20px;
  justify-content: space-between;
}
.newaddress-foot .set-default {
  margin-left: 10px;
}
.distpicker-address-wrapper {
  display: flex;
  justify-content: space-between;
}
.distpicker-address-wrapper select {
  width: 210px;
  height: 26px;
  padding: 1px 10px;
}
</style>
