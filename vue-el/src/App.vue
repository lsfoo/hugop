<template>
  <div id="app">
    <el-container>
      <el-header>
        <c-navbar />
      </el-header>
      <el-container>
        <el-aside width="240px" class="sidebar">
          <c-sidebar />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Sidebar from './components/common/sidebar'
import Navbar from './components/common/navbar'
export default {
  components: {
    'c-sidebar': Sidebar,
    'c-navbar': Navbar
  }
}
</script>

<style>
body,
html {
  height: 100%;
  padding: 0px;
  margin: 0px;
  color: #45474c;
}
#app {
  height: 100%;
}
.el-header {
  padding: 0 0;
}
.el-menu {
  border: 0;
}
.el-aside {
  height: 100%;

  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);
}
.el-container {
  height: 100%;
}
.el-main {
  overflow-y: auto;
  padding-left: 40px;
  padding-right: 40px;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #666666;
}
</style>
