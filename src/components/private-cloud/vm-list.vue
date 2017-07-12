<template>
    <div>
	  <el-table
	    ref="multipleTable"
	    :data="userList"
	    border
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	    <el-table-column type="selection" width="55"></el-table-column>
	    
	    <el-table-column
	        prop="userName"
	        label="用户名">
	    </el-table-column>
	    <el-table-column
	        prop="showName"
	        label="联系人">
	    </el-table-column>
	    <el-table-column
	        prop="cellphone"
	        label="手机">
	    </el-table-column>
	    <el-table-column
	        prop="email"
	        label="邮箱">
	    </el-table-column>
	    <el-table-column
	        prop="isenable"
	        label="账号状态">
	    </el-table-column>
	    <el-table-column
	        prop="vmcounts"
	        label="虚机数量">
	    </el-table-column> 
	    <el-table-column
	        prop="dateCreated"
	        label="创建时间">
	    </el-table-column>
	    <el-table-column label="操作">
	        <template scope="scope">
		        <el-button size="small">编辑</el-button>
		        <el-button size="small" type="danger">删除</el-button>
	        </template>
	    </el-table-column>    
	  </el-table>
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="userData.page"
	      :page-sizes="[10,20,30]"
	      :page-size="userData.pageSize"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="userData.total">
	    </el-pagination>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'
	export default{
		data(){
			return {
				userList:[],
				userData:{}
			}
		},
		mounted(){
				axios.post('http://10.10.112.139:8080/user.do?method=getAllUsers')
			  .then((res)=>{
			  	console.log(res)
			  	  this.userList=res.data.rows;
			  	  this.userData=res.data;
			  })
			  .catch(function (error) {
			    console.log(error);
			  });		   


		},
		methods: {
	        toggleSelection(rows) {
	            if (rows) {
		            rows.forEach(row => {
		              this.$refs.multipleTable.toggleRowSelection(row);
		            });
		        } else {
		          	this.$refs.multipleTable.clearSelection();
		        }
		    },
		    handleSelectionChange(val) {
		        this.multipleSelection = val;
		    },
		    handleSizeChange(){

		    },
		    handleCurrentChange(){

		    }

	   	}
	}
</script>

<style>

</style>
