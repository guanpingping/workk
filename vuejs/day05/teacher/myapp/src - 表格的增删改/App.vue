<template>
  <div id="app">
    <Addlist-com v-show="show"/>
    <Modify-com v-show="!show" @handleToggle="toggle"/>
    <List-com @handleToggle="toggle"/>
  </div>
</template>

<script>
import AddList from "./components/addList";
import Modify from "./components/modify";
import List from "./components/list";
export default {
  components:{
    "Addlist-com":AddList,
    "Modify-com":Modify,
    "List-com":List
  },
  data(){
    return {
      show:true
    }
  },
  methods:{
    toggle(params){
      this.show = params;
    }
  }
}
</script>

<style>

</style>
