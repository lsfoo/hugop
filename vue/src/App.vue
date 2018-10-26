<template>
  <div id="app" class="wrapper">
    <c-header></c-header>
    <div class="container-fluid">
      <div class="row wrapper">
        <div class="col-12 col-md-3 col-xl-2 bd-sidebar col-lg-2 wrapper">
          <c-menubar></c-menubar>
        </div>

        <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content wrapper">main</main>
        <div class="col-lg-8d-none d-xl-block col-xl-2 bd-toc wrapper">
          <p>right-bar</p>
        </div>
      </div>
      <footer>版权什么的</footer>
    </div>
  </div>
</template>


<script>
import header from "./components/common/header.vue";
import menuBar from "./components/common/menu_bar.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "c-header": header,
    "c-menubar": menuBar
  }
};
</script>
<style>
html,body{
  height: 100%;
}
.container-fluid{
  height: 91%;

}
.wrapper{
height:100%;
overflow-y: auto;
  border: 1px solid blue;
}

.main_row{
  height: 100%;
}

.bd-sidebar  {
  height: 100%;
  padding: 2em;
  border-right: 2px solid blue;
}

.bd-toc{
  padding: 2em;
  border-left: 2px solid blue;
  background-color: aqua;
}
</style>
