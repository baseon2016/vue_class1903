<template>
  <div class="navi df">
    <div v-for="item in navi" :class="{active:item.isActive,'navi-item':true}" :key="item.id">
      <a href="javascript:void(0)">{{item.selector}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "navi",
  data() {
    return {
      navi: [
        {
          id: "nav01",
          selector: "Home",
          isActive: false
        },
        {
          id: "nav02",
          selector: "Selling",
          isActive: false
        },
        {
          id: "nav03",
          selector: "Buying",
          isActive: true
        },
        {
          id: "nav04",
          selector: "Renting",
          isActive: false
        },
        {
          id: "nav05",
          selector: "Moving",
          isActive: false
        },
        {
          id: "nav06",
          selector: "Finance",
          isActive: false
        },
        {
          id: "nav07",
          selector: "Contacts",
          isActive: false
        }
      ]
    };
  }
};
</script>

<style>
.navi {
  justify-content: space-between;
  align-items: center;
}
.navi-item {
  padding: 0 20px;
  border-radius: 5px;
}
.navi-item a {
  display: block;
  font-size: 16px;
  font-weight: lighter;
  line-height: 1.8;
  color: #fff;
}
.navi-item.active,
.navi-item:hover {
  background-image: url("./../assets/images/nav-bg.gif");
}
</style>
