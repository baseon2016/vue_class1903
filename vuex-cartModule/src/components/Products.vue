<template>
  <div>
    <ul v-if="products&&productCart">
      <li v-for="item in products" :key="item.id">
        名称:
        <span>{{item.title}}</span>--
        价格:
        <span>{{item.price}}</span>--
        库存:
        <span>{{item.inventory}}</span>
        <button
          :disabled="productCart.every(ele => ele.id != item.id)?false:productCart.find(ele => ele.id === item.id).qty >=
        products.find(ele => ele.id === item.id).inventory?true:false"
          @click="changeCart(item.id,'add')"
        >添加到购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions } from "vuex";
export default {
  name: "products",
  // computed: {
  //   products() {
  //     return this.$store.state.products;
  //   },
  //   productCart() {
  //     return this.$store.getters.productCart;
  //   }
  // },
  // vuex提供了一些辅助函数 方便组件和vuex做交互
  // 1.mapState 是一个函数 该函数需要接受一个对象作为参数，该对象内只能写方法 方法内默认接收一个参数 state(vuex的数据),该方法的返回值就是组件想要获取的vuex的数据，mapState 函数会默认返回方法内传递的对象

  computed: {
    ...mapState({
      products: state => state.products.products
      // 下面简写两种
      // products: "products"
      // 不传递对象，改为数组...mapState(['products'])
    }),
    //后面补充组件自己的计算属性
    ...mapGetters({
      productCart: "productCart"
    })
  },
  methods: {
    ...mapActions(['addCart','changeCartQty']),

    changeCart(id, foo) {
      if (this.$store.getters.productCart.every(ele => ele.id != id)) {
      this.addCart(id)
      } else {
        this.changeCartQty(id,foo)
      }
    }
  }
};
</script>

<style>
</style>
