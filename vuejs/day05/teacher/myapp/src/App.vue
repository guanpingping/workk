<template>
  <div id="app">
      <input type="checkbox" v-model="flag">

       <transition name="slide">
          <div class="box" v-show="flag"></div>
       </transition>
  </div>
</template>

<script>

export default {
  
  data(){
    return {
      flag:false
    }
  }
 
}

</script>

<style>
.box{
  width: 100px;
  height: 100px;
  background: red;
  transform: translate(0px,0px);
  /* position: relative;
  left: 300px; */
}
/* 
.slide-enter,.slide-leave-to{
 left:0
}


.slide-enter-active,.slide-leave-active{
  transition: all 2s;
} */

/* .slide-enter{
  transform: scale(2) translateX(0);
}

.slide-leave-to{
  transform: scale(.5) translateX(0);
}

.slide-enter-active,.slide-leave-active{
  transition: all 2s;
} */




.slide-enter-active{
  animation:move 5s 0s linear;
}



@keyframes move{
  0%{
    transform: scale(.5) translate(0px,0px)
  }

  25%{
    transform: scale(.5) translate(300px,0px)
  }
  50%{
    transform: scale(.5) translate(300px,300px)
  }
  75%{
    transform: scale(.5) translate(0px,300px)
  }
  100%{
    transform: scale(.5) translate(0px,0px);
  }
}







</style>
