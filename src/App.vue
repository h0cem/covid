<template>
  <v-app id="app">
    <Header id="header"></Header>
    <DashBoard id="dashboard"></DashBoard>
  </v-app>
</template>


<script>
import Header from "@/components/Header";
import DashBoard from "@/components/DashBoard";

export default {
  name: 'App',
  components: {
    Header,
    DashBoard
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #000000;
  height: 100vh;
}

#header {
  height: 44px;
  background: #a7d66e;
}

#dashboard {
  height: calc(100vh - 44px);
  background: antiquewhite;
}

</style>
