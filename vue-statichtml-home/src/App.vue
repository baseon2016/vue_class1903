<template>
  <div>
    <topSection/>
    <mainSection/>
    <bottomSection/>
  </div>
</template>

<script>
import topSection from "./components/header";
import mainSection from "./components/mainSection";
import bottomSection from "./components/footer";
export default {
  name: "sections",
  components: {
    topSection,
    mainSection,
    bottomSection
  }
};
</script>

<style>
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.df {
  display: flex;
  flex-wrap: nowrap;
}
</style>
