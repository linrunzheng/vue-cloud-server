<template>
  <div class="head-nav">
    <el-row :gutter="20" type="flex" justify="end">
        <el-col :span="3"><div class="grid-content head-nav__list">调度任务</div></el-col>
        <el-col :span="3"><div class="grid-content head-nav__list">告警信息</div></el-col>
        <el-col :span="3"><div class="grid-content head-nav__list">系统信息</div></el-col>
        <el-col :span="3"><div class="grid-content head-nav__list">用户信息</div></el-col>
        <el-col :span="3"><div class="grid-content head-nav__list">退出</div></el-col>
      
  </el-row>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
.head-nav{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    background:#fff;
    z-index: 100;
    border-bottom: 1px solid #ddd;
  }
  
.head-nav >div{
    line-height: 36px;cursor: pointer;
    margin: 0!important;
}
</style>
