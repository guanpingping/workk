<template>
    <div>
    	<!--required空字段不让提交-->
       	 姓名：<input type="text" v-model="nameVal" required><br>
       	 年龄：<input type="text" v-model="ageVal" required><br>
       	个性签名：<input type="text" v-model="styleVal" required><br>
        <button @click="handleAdd()">添加</button>
        <button @click="handleCancel()">取消</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
        	nameVal:"",
        	ageVal:"",
        	styleVal:""
        }
    },
    methods:{
        handleAdd(){
        		/*此处一定要改成深拷贝，就是复制了一份给newobj*/
        		/*或用     var obj = {};
	                obj.name = this.name;
	                obj.age = this.age;
	                obj.sign = this.sign;
				*/
	        	var newobj = Object.assign({"nval":this.nameVal},{"aval":this.ageVal},{"sval":this.styleVal});
	            this.Observer.$emit("handle",newobj);
	            this.handleCancel();
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