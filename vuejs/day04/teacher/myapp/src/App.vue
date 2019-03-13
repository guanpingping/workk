<template>
  <div id="app">
    <component :is="comName"></component>
    <Footer-com @handle="handleToggle"/>
    <!-- 
    <Home-com/>
    <List-com/>
    <Order-com/>
    <My-com/> 
    -->
  </div>
</template>

<script>
import Home from "./components/home.vue";
import List from "./components/list.vue";
import Order from "./components/order.vue";
import My from "./components/my.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
    "Home-com": Home,
    "List-com": List,
    "Order-com": Order,
    "My-com": My,
    "Footer-com": Footer
  },
  data() {
    return {
      comName: "Home-com"
    };
  },
  methods: {
    handleToggle(index) {
      switch (index) {
        case 0:
          this.comName = "Home-com";
          break;
        case 1:
          this.comName = "List-com";
          break;
        case 2:
          this.comName = "Order-com";
          break;
        case 3:
          this.comName = "My-com";
          break;
      }
    }
  }
};
</script>

<style>

#app,.page{
  height:100%;
}
</style>
