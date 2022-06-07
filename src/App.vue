<template>
  <div id="app">
    <Sidebar/>
    <TitlePage/>
  </div>
  <router-view />
</template>

<script>
  import Sidebar from "./components/Sidebar.vue";
  import TitlePage from './components/TitlePage.vue';

  export default {
    name: "App",
    components: {
      Sidebar,
      TitlePage,
    },
  };
</script>

<style>
  .bg-canoas {
    background-color: #144334 !important;
    background-image: var(--bs-gradient)!important;
  } 
</style>