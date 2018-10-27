<template>
  <div id="app" class="wrapper">
    <c-header></c-header>
    <div class="container-fluid">
      <div class="row wrapper main">
        <div class="col-12 col-md-3 col-xl-2  col-lg-2 bd-sidebar wrapper">
          <c-sidebar></c-sidebar>
        </div>
          <router-view class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content wrapper">123</router-view>
        <div class="col-lg-8d-none d-xl-block col-xl-2 bd-toc wrapper">
          <p>right-bar</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import header from "./components/common/header.vue";
import sidebar from "./components/common/sidebar.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "c-header": header,
    "c-sidebar": sidebar
  }
};
</script>
<style>
html,
body {
  height: 100%;
}
div {
  border: 1px solid blue;
}
.main {
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 15px;
  right: 15px;
}
</style>
