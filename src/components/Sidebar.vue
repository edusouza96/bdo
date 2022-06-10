<template>
  <div class="sidebar">
    <nav class="navbar fixed-top navbar-dark navbar-expand-md bg-canoas">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/icone.png" alt="" width="40" height="38" class="d-inline-block align-text-center">
          <span class="navbar-brand-title">Banco de Oportunidades</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Banco de Oportunidades</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              
              <li class="nav-item">
                <router-link to="/vagas" class="nav-link">Vagas</router-link>
              </li>
             
              <li class="nav-item">
                <router-link to="/perguntas-frequentes" class="nav-link">Perguntas Frequentes</router-link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
  .navbar-dark .navbar-nav .nav-link {
    color: #ffffff;
  }
  .navbar-dark .navbar-nav .nav-link:hover {
    color: #a8cf45;
  }
  .navbar-dark .navbar-nav .nav-link:focus {
    color: #a8cf45;
  }
    
  @media (max-width: 767px) {
    .navbar-dark .navbar-nav .nav-link {
      color: #000000;
    }
  }

  @media (max-width: 378px) {
    .navbar-brand-title {
      display: none;
    }
  }
</style>
