<template>
    <el-col :span="24" style="background-color: #fafafa;">

        <div class="searchbar">
            <el-input placeholder="搜索菜单"></el-input>
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">系统设置</span>
                </template>
                <el-menu-item  index='31'>角色</el-menu-item>
                <el-menu-item index = '32'>权限</el-menu-item>
                <el-menu-item index='33'>组织</el-menu-item>
                <el-menu-item index = '34'>菜单</el-menu-item>
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


