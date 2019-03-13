<template>
    <ul>
        <li 
        	v-for="(item,index) in todoList"
        	v-bind:class="toclassindex==index?'active':''"
        	@click="changeClass(index)"
        	 >
        	<p>{{item.nval}}</p>
        	<p>{{item.aval}}</p>
        	<p>{{item.sval}}</p>
        	<!--一定要加.stop修饰符去阻止事件冒泡，否则在选中li的修改和删除时也会认为是选中当前的li进而改变其样式-->
        	<button @click.stop="handleUpdate(index)">修改</button>
            <button @click.stop="handleDel(index)">删除</button>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            todoList:[],
            todoindex:-1,
            toclassindex:-1,
            toclassarr:[],
            tochangeshowarr:[]
        }
    },
  	props:{
    		"showstatus":Boolean
   	},
    created(){
    	
    	//从input传过来的数据存入todolist数组中
        this.Observer.$on("handle",(val)=>{
            this.todoList.push(val);
        })
        
        //修改之后穿过来的值
        this.Observer.$on("handleupdatelist",(params)=>{
        	this.todoList.splice(this.todoindex,1,params);
        })
    },
    methods:{
        handleDel(index){
        	if( confirm("确认删除吗？") ){
        		
        		/*删除时若上面显示的是修改页面是删除这个li中修改按钮修改的数据时，
        		 * 就将那改为添加页面, 通过tochangeshowarr记录的数据去查看update的下标
        		 * */
        		
        		var updateind = this.todoList.indexOf( this.tochangeshowarr );
        		if( index == updateind  && !this.showstatus ){
        			//向父组件发送让添加页面显示
        			this.$emit("hasshow",true);
        		}
        		
        		
        		//删除
        		this.todoList.splice(index,1);
        		
        		//重新查看选那个元素的下标，通过记录选中的数据去查看下标
        		var ind = this.todoList.indexOf( this.toclassarr );
        		this.toclassindex = ind;
        		
        		
        	}
        },
        handleUpdate(index){
        	//记录要修改的数据的下标
        	this.todoindex = index;
        	//向修改页面发送数据
        	this.Observer.$emit("handlelist",this.todoList[index]);
        	
        	//向父组件发送让修改页面显示
        	this.$emit("hasshow",false);
        	
        	//记录一个修改的原始值
        	this.tochangeshowarr = this.todoList[index];
        },
        changeClass(index){
        	/*选中换class*/
        	this.toclassindex = index;
        	
        	/*记录选中的数据*/
        	this.toclassarr = this.todoList[index];
        }
    }
}
</script>


<style lang="">
    .active{
    	background: darkgray;
    }
</style>