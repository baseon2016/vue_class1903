<template>
  <div>
    <div class="address-title df">
      <span>收货地址</span>
      <div class="click-bar df" @click="setAddNew">
        <span class="new-addr">+</span>
        <span>新增地址</span>
      </div>
    </div>
    <div class="address-content">
      <div
        v-for="item in showAddresses"
        :key="item.id"
        :class="{cell:true, df:true,inuse:item.inUse}"
        @click="useWhich(item)"
      >
        <div>
          <p>
            <img src="./../../assets/img/address/addressee.png" />
            {{item.addressee}}
          </p>
          <p>
            <img src="./../../assets/img/address/address.png" />
            {{item.address}}
          </p>
          <p>
            <img src="./../../assets/img/address/tel.png" />
            {{item.phone}}
          </p>
        </div>
        <div class="address-func df">
          <div>
            <span v-if="item.default" class="default">默认</span>
            <span v-else class="undefault" @click.stop="setDefault(item)">设为默认</span>
          </div>
          <div>
            <img src="./../../assets/img/address/edit.png" alt />
            <span @click.stop="editNew(item)">编辑</span>
          </div>
          <div>
            <img src="./../../assets/img/bin.png" alt />
            <span>删除</span>
          </div>
        </div>
        <label v-if="item.inUse" class="custome-label checked useaddr">√</label>
      </div>
    </div>
    <div class="address-more">
      <span v-if="addressMore" class="click-bar" @click="showMore">显示更多</span>
      <span v-else class="click-bar" @click="showDefault">收起显示</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "ship-address",
  computed: {
    ...mapGetters(["addressMore", "showAddresses"])
  },
  methods: {
    ...mapMutations([
      "useWhich",
      "setDefault",
      "showMore",
      "showDefault",
      "setAddNew",
      "editNew"
    ])
  }
};
</script>

<style>
.address-title {
  justify-content: space-between;
  border-bottom: 2px solid #000;
  font-size: 18px;
  padding: 15px 0;
}
.address-title span.new-addr {
  display: block;
  width: 18px;
  line-height: 18px;
  border: 1px solid #000;
  text-align: center;
  margin-right: 10px;
}
.address-content {
  padding-bottom: 20px;
}
.address-content .cell {
  font-size: 14px;
  color: #2b2e33;
  line-height: 1.5;
  padding: 20px 25px;
  justify-content: space-between;
  position: relative;
  border: 3px solid #fff;
  cursor: pointer;
  user-select: none;
}
/* .address-content .cell + .cell {
  border-top: 1px solid #d1d7e3;
} */
.address-content .cell.inuse {
  border: 3px solid #fdd900;
}
.address-content .cell .useaddr {
  width: 19px;
  height: 19px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
}
.address-content .address-func {
  width: 274px;
  justify-content: space-between;
}
.address-func .default,
.address-func .undefault {
  display: block;
  width: 97px;
  line-height: 36px;
  text-align: center;
  user-select: none;
}
.address-func .default {
  color: #fff;
  background-color: #2b2e33;
}
.address-func .undefault {
  cursor: pointer;
}
.address-func div > img {
  margin-right: 5px;
}
.address-more {
  width: 100%;
}
.address-more span {
  display: block;
  width: 100%;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  background-image: url("./../../assets/img/mask.png");
}
</style>
