<template>
  <div class="presell">
    <div class="presell-inner df">
      <div class="presell-info df">
        <EtaClock />
        <Order />
      </div>
    </div>
  </div>
</template>

<script>
import EtaClock from "./EtaClock";
import Order from "./Order";
export default {
  name: "presell",
  components: {
    EtaClock,
    Order
  }
};
</script>

<style>
.presell {
  background-image: url("./../assets/img/presell-bg.png");
  padding: 30px 50px 100px;
}
.presell .presell-info {
  align-items: flex-start;
  padding-bottom: 21px;
  border-bottom: 2px solid #707378;
}
</style>
