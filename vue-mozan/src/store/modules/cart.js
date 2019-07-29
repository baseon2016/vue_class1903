const cart = {
  state: {
    procedure: null,
    checkAll: false,
    cart: [
      {
        productId: "cart1",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        price: {
          normal: 960,
          presell: 700
        },
        model: "iPhone 6+",
        size: "M",
        qty: 1,
        isCheck: true,
        storage: 5,
        ban: false,
        presell: false
      },
      {
        productId: "cart2",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        price: {
          normal: 960,
          presell: 700
        },
        model: "iPhone 6+",
        size: "M",
        qty: 1,
        isCheck: true,
        storage: 5,
        ban: true,
        presell: false
      },
      {
        productId: "cart3",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        price: {
          normal: 960,
          presell: 700
        },
        model: "iPhone 6+",
        size: "M",
        qty: 1,
        isCheck: true,
        storage: 0,
        ban: false,
        presell: false
      }
    ]
  },
  mutations: {
    transProcedure(state, payload) {
      state.procedure = payload;
    },
    transCheck(state, payload) {
      if (!payload.ban && payload.storage != 0) {
        state.cart.find(
          ele => ele.productId === payload.productId
        ).isCheck = !state.cart.find(ele => ele.productId === payload.productId)
          .isCheck;
        // 这里的this就是该模块
        // 为什么cart也能log出该模块？但是不能使用下面的getters
        if (this.getters.unbanCart.every(ele => ele.isCheck === true)) {
          state.checkAll = true;
        } else {
          state.checkAll = false;
        }
      } else {
        state.cart.find(
          ele => ele.productId === payload.productId
        ).isCheck = false;
      }
      // console.log(cart.getters);

      // status = !status;这个为什么不好使？
    },
    transCheckAll(state) {
      state.checkAll = !state.checkAll;
      state.cart.forEach(ele => {
        if (!ele.ban && ele.storage != 0) {
          ele.isCheck = state.checkAll;
        } else {
          ele.isCheck = false;
        }
      });
    },
    transQty(state, payload) {
      if (payload.type === "increase") {
        if (payload.item.qty < payload.item.storage) {
          payload.item.qty++;
        } else {
          alert("库存不足");
        }
      } else {
        if (payload.item.qty > 1) {
          payload.item.qty--;
        } else {
          alert("确定不要此产品么？请点击删除");
        }
      }
    },
    delCartItem(state, payload) {
      state.cart = state.cart.filter(ele => ele.productId != payload.productId);
    },
    delSelected(state) {
      state.cart = state.cart.filter(ele => !ele.isCheck);
    }
  },
  getters: {
    unbanCart(state) {
      return state.cart.filter(ele => !ele.ban && ele.storage != 0);
    },
    totalQty(state) {
      return state.cart.reduce((accumulator, ele) => {
        if (!ele.ban && ele.storage != 0) {
          return accumulator + ele.qty;
        } else {
          return accumulator;
        }
      }, 0);
    },
    cost(state, getters) {
      return payload => (payload.price.presell * payload.qty).toFixed(2);
    },
    totalCost(state) {
      return state.cart
        .reduce((accumulator, ele) => {
          if (ele.isCheck) {
            return accumulator + ele.qty * ele.price.presell;
          } else {
            return accumulator;
          }
        }, 0)
        .toFixed(2);
    },
    selectNum(state) {
      return state.cart.reduce((num, ele) => {
        if (ele.isCheck) {
          return num + 1;
        } else {
          return num;
        }
      }, 0);
    },
    selectCart(state) {
      return state.cart.filter(ele => ele.isCheck === true);
    },
    itemListBtns(state) {
      return state.cart.map(ele => {
        let btns = {};
        btns.productId = ele.productId;
        if (ele.qty === ele.storage || ele.ban || ele.storage === 0) {
          btns.disableIncrease = true;
        } else {
          btns.disableIncrease = false;
        }
        if (ele.qty === 1 || ele.ban || ele.storage === 0) {
          btns.disableDecrease = true;
        } else {
          btns.disableDecrease = false;
        }
        return btns;
      });
    }
  }
};
export default cart;
