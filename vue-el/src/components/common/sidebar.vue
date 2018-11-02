<template>
    <el-col :span="24" style="background-color: #fafafa;">

        <div class="searchbar">
            <el-input placeholder="搜索菜单"></el-input>
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">系统设置</span>
                </template>
                <el-menu-item index='31'>角色</el-menu-item>
                <el-menu-item index='32'>权限</el-menu-item>
                <el-menu-item index='33'>组织</el-menu-item>
                <el-menu-item index='34'>菜单</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-col>

</template>
<style>
.el-submenu .el-menu-item {
  height: 30px;
  line-height: 30px;
  padding: 0 45px;
  min-width: 200px;
}
.searchbar {
  margin: 20px;
}
</style>


