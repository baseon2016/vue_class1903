<template>
  <div class="topSection">
    <div class="container">
      <div class="navigation df">
        <logo/>
        <navi/>
      </div>
      <banner/>
    </div>
  </div>
</template>

<script>
import logo from "./logo";
import navi from "./navi";
import banner from "./banner";
export default {
  name: "topSection",
  components: {
    logo,
    navi,
    banner
  }
};
</script>

<style>
.topSection {
  padding: 20px 0;
  background-image: url("./../assets/images/header-pattern.gif");
}
.container {
  margin: 0 auto;
}
@media screen and (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
@media screen and (max-width: 1200px) {
  .container {
    width: 90%;
  }
}
.navigation {
  justify-content: space-between;
  align-items: center;
}
</style>
