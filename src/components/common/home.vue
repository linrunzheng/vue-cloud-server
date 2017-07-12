<template>
    <div>
        <headBar></headBar>
	    <navBar></navBar>
	    <div id="routerViewDetail">
	        <router-view></router-view>
	    </div>
    </div>
</template>
<script type="text/javascript">
import navBar from './nav-bar.vue'
import headBar from './head-bar.vue'

/*import HomePage from './components/main/main.vue'*/
export default {
    name: 'app',
    components:{
        navBar,
        headBar
  }
}
</script>


<style lang="scss">
 
#routerViewDetail{
	width:100%;
	height:100%;
	background:#f2f4f8;
	padding-left: 225px;
	padding-top: 86px;
	position: absolute;
	box-sizing:border-box;
	left:0;
	top:0;
	z-index:50;
}
.el-submenu .el-menu-item:hover, .el-submenu__title:hover{background: #4776c8!important;}

</style>
