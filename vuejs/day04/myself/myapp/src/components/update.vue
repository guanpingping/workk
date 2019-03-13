<template>
	<div>
       	 姓名：<input type="text" v-model="nameVal"><br>
       	 年龄：<input type="text" v-model="ageVal"><br>
       	个性签名：<input type="text" v-model="styleVal"><br>
        <button @click="handleAddUpdate()">修改</button>
        <button @click="handleCancel()">取消</button>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				nameVal:"",
				ageVal:"",
				styleVal:""
			}
		},
		created(){
			//从list接受数据
	    	this.Observer.$on("handlelist",(data)=>{
	//  		console.log(data)
	    		this.nameVal = data.nval;
	    		this.ageVal = data.aval;
	    		this.styleVal = data.sval;
	    	})
    	},
    	methods:{
    		handleAddUpdate(){
    			var newobj = Object.assign({"nval":this.nameVal,"aval":this.ageVal,"sval":this.styleVal});
    			
    			//给list组件发送数据
    			this.Observer.$emit("handleupdatelist",newobj);
    			
    			//父组件app发送数据
    			this.$emit("hasshow",true);
    		},
    		handleCancel(){
    			this.nameVal = "";
	            this.ageVal = "";
	            this.styleVal = "";
    		}
    	}
	}
</script>

<style>
</style>