<template>
  <div class="nva-bar">
      <div>
           <el-row class="tac">
             <el-col >
               <el-menu :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                 <el-submenu index="1">
                     <template slot="title"><i class="el-icon-message">云监控</i></template>
                     <el-menu-item-group>
                           <el-menu-item index="main">资源监控</el-menu-item>
                           <el-menu-item index="alarm">告警服务</el-menu-item>
                   </el-menu-item-group>           
                 </el-submenu>
                  <el-submenu index="2">
                       <template slot="title"><i class="el-icon-message"></i>私有云</template>
                       <el-menu-item-group>
                           <el-menu-item index="private-list">虚拟机管理</el-menu-item>
                           <el-menu-item index="template-list">模板管理</el-menu-item>
                       </el-menu-item-group>           
                 </el-submenu>
                  <el-submenu index="3">
                       <template slot="title"><i class="el-icon-message"></i>公有云</template>
                       <el-menu-item-group>
                           <el-menu-item index="cloud-list">公有云管理</el-menu-item>
                           <el-menu-item index="disk-list">云磁盘管理</el-menu-item>
                       </el-menu-item-group>           
                 </el-submenu>
                 <el-submenu index="4">
                       <template slot="title"><i class="el-icon-message"></i>高级管理</template>
                       <el-menu-item-group>
                           <el-menu-item index="user">用户管理</el-menu-item>
                           <el-menu-item index="system-manage">系统设置</el-menu-item>
                           <el-menu-item index="message">短息管理</el-menu-item>
                           <el-menu-item index="senior-set">高级设置</el-menu-item>
                       </el-menu-item-group>           
                 </el-submenu>
               </el-menu>
             </el-col>   
           </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[
         1,2,3
      ]
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .nva-bar{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background:#1d2637;
        width: 210px;
        overflow-y:hidden;
        z-index: 100;
       /*  .el-menu{
           background:#1d2637;
           color: #fff;
       }
       .el-menu-item, .el-submenu__title{
           color: #fff;
           background:#1d2637;
           height: 45px;
           line-height: 45px;
       } */
    }    
    .nva-bar .el-menu-item-group__title{display: none;}
</style>
