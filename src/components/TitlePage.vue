<template>
  <header class="title-page">
    <div class="p-4 mb-4 bg-secondary bg-gradient bg-opacity-25">
      <div class="container-fluid">
        <h2>
          {{ title }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TitlePage",
  computed: {
    title(){
        let title = this.$route.path.replace('-', ' ').replace('/', '');
        return title ? title : 'Home'
    }
  },
};
</script>

<style scoped>
h2{
    text-transform: capitalize;
}
</style>