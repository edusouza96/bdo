<template>
  <div id="app">
    <!-- <Sidebar/>
    <TitlePage/>
    -->
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
  // import Sidebar from "./components/Sidebar.vue";
  // import TitlePage from './components/TitlePage.vue';

  export default {
    name: "App",
    components: {
      // Sidebar,
      // TitlePage,
        Header,
    },
  };
</script>

<style>
  .bg-canoas {
    background-color: #144334 !important;
    background-image: var(--bs-gradient)!important;
  } 
</style>