<template>
  <div id="app">
      <Input-com v-show="showName"/>
      
      <!--:showstatus="showName"是父组件向子组件传showName的值，用来查看当前显示的是修改页面还是删除页面-->
      <Update-com v-show="!showName" @hasshow="tochangeshow" :showstatus="showName"/>
      <List-com @hasshow="tochangeshow"/>
  </div>
</template>

<script>
  import Input from "./components/input.vue";
  import List from "./components/list.vue";
  import Update from "./components/update.vue"
  export default {
    components:{
      "Input-com":Input,
      "List-com":List,
      "Update-com":Update
    },
    data(){
    	return{
    		ComName:"Input-com",
    		showName:true
    	}
    },
    methods:{
    	tochangeshow( val ){
//  		console.log(val)
    		this.showName = val;
    	}
    }
  }
</script>

<style>
  
</style>
