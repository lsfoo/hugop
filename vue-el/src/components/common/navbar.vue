<template>

    <el-menu class="shadow" :default-active="activeIndex2"  mode="horizontal" @select="handleSelect"  background-color="#1976d2" text-color="#fff" active-text-color="#ffffcc">

        <el-menu-item  >  <span style="font-size:22px" > 控制面板</span></el-menu-item>
        <el-submenu index="1" style="float:right">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2" style="float:right" >消息中心</el-menu-item>
    </el-menu>
</template>
<style>
.shadow{
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.3)

}
.el-menu.el-menu--horizontal{
    border: 0px;
}


</style>

