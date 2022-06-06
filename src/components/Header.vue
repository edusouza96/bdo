<template>
  <div id="header">
    <Sidebar/>
    <TitlePage/>
  </div>
</template>

<script>
  import Sidebar from "./Sidebar.vue";
  import TitlePage from './TitlePage.vue';

  export default {
    name: "Header",
    components: {
      Sidebar,
      TitlePage,
    },
  };
</script>