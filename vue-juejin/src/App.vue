<template>
  <div class="wrap">
    <div class="header container">
      <h1>
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" />
      </h1>
      <div class="nav">
        <router-link
          to="/"
          :class="{'active-router':$route.path==='/'||$route.path.indexOf('welcome')!=-1}"
        >
          <h3>首页</h3>
        </router-link>
        <router-link to="/pins" active-class="active-router">
          <h3>沸点</h3>
        </router-link>
        <router-link to="/talks" active-class="active-router">
          <h3>话题</h3>
        </router-link>
      </div>
    </div>
    <div class="main container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
ul {
  list-style: none;
}
* {
  box-sizing: border-box;
}
.container {
  width: 970px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .nav {
  background-color: #ccc;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.active-router {
  color: cyan;
}
</style>
