<template>
  <div class="home">

    <header class="masterhead">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-lg-5 text-xs-center text-sm-center text-md-center text-lg-start">
              <img src="../assets/logo.png" alt="logo banco de oportunidades" class="img-fluid">
            </div>
            <div class="col-xs-12 col-lg-7 text-xs-center text-sm-center text-md-center text-lg-end">
              <img src="../assets/brasao.png" alt="brasao prefeitura de canoas" class="img-fluid mt-5">
            </div>
          </div>
        </div>
    </header>

    <section class="page-section quantitative-information">
      <div class="container">
       
        <div class="row text-center">

          <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="d-flex justify-content-center">
              <div class="quantitative-information-item">
                <i class="fas fa-building fa-inverse fa-4x"></i>
              </div>
            </div>
            <h4 class="my-3">{{ parseInt(amountCompany.toFixed(0)).toLocaleString() }}</h4>
            <h5 class="my-3">EMPRESAS</h5>
          </div>

          <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="d-flex justify-content-center">
              <div class="quantitative-information-item">
                <i class="fas fa-id-badge fa-inverse fa-4x"></i>
              </div>
            </div>
            <h4 class="my-3">{{ parseInt(amountCandidate.toFixed(0)).toLocaleString() }}</h4>
            <h5 class="my-3">CURRÍCULOS</h5>
          </div>

          <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="d-flex justify-content-center">
              <div class="quantitative-information-item">
                <i class="fas fa-newspaper fa-inverse fa-4x"></i>
              </div>
            </div>
            <h4 class="my-3">{{ parseInt(amountVacancy.toFixed(0)).toLocaleString() }}</h4>
            <h5 class="my-3">VAGAS</h5>
          </div>

          <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="d-flex justify-content-center">
              <div class="quantitative-information-item">
                <i class="fas fa-eye fa-inverse fa-4x"></i>
              </div>
            </div>
            <h4 class="my-3">{{ parseInt(amountVisitors.toFixed(0)).toLocaleString() }}</h4>
            <h5 class="my-3">VISUALIZAÇÕES</h5>
          </div>

        </div>
      </div>
    </section>

    <section class="page-section last-vacancies">
      <div class="container">
        <h1 class="page-section-title">
          Últimas vagas cadastradas
        </h1>
      </div>
      <div id="carousel_vacancies" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel_vacancies" v-for="(vacancy, index) in vacancies" :key="vacancy.id" :data-bs-slide-to="index" :aria-label="'Slide '+index" :class="index == 0 ? 'active' : ''" ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(vacancy, index) in vacancies" :key="vacancy.id" :class="index == 0 ? 'active' : ''" >
            <div class="container">
              <div class="carousel-caption text-start">
                <h2 class="text-truncate">{{ vacancy.title }}</h2>
                <hr class="text-canoas-secondary">
                <p><strong>Descrição</strong></p>
                <p class="carousel-vacancies-description">{{ vacancy.description }}</p>
                <p>
                  <strong>Nº de Vagas</strong>
                  {{ vacancy.numberJobsOpportunities }}
                </p>
                <p class="text-end"><a class="btn btn-lg btn-outline-success" href="#">Veja mais</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel_vacancies" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel_vacancies" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section class="page-section information-objective">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="objective in objectives" :key="objective.id">
            <div class="card h-100">
              <div class="card-header">
                <h5 class="card-title">{{ objective.title }}</h5>
              </div>
              <div class="card-body">
                <p class="card-text">{{ objective.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="page-section area-user">
      <div class="container">
        <h1 class="page-section-title">
          Faça seu cadastro
        </h1>
        <div class="row mt-5 d-flex justify-content-center">
          <div class="col-xs-12 col-md-6">
            <div class="area-user-item">
              <div class="row">
                <div class="col-12 mt-4 text-center">
                  <i class="fa fa-3x fa-user"></i> 
                  <h3> Cidadão</h3>
                </div>
              </div>
              <hr class="text-canoas-secondary">
              <div class="row container">
                <div class="d-grid gap-2">
                  <button class="btn btn-success" type="button">Cadastrar</button>
                  <button class="btn btn-success" type="button">Login</button>
                </div>
              </div>

            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="area-user-item">
              <div class="row">
                <div class="col-12 mt-4 text-center">
                  <i class="fa fa-3x fa-building"></i> 
                  <h3> Empresa</h3>
                </div>
              </div>
              <hr class="text-canoas-secondary">
              <div class="row container">
                <div class="d-grid gap-2">
                  <button class="btn btn-success" type="button">Cadastrar</button>
                  <button class="btn btn-success" type="button">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>


    <footer class="footer py-4 text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-3 my-md-0">
            <a class="btn btn-outline-light btn-social mx-2" target="_blank" href="https://www.youtube.com/c/PrefeituradeCanoasOficial" aria-label="YouTube"><i class="fab fa-youtube fa-2x"></i></a>
            <a class="btn btn-outline-light btn-social mx-2" target="_blank" href="https://twitter.com/prefcanoas" aria-label="Twitter"><i class="fab fa-twitter fa-2x"></i></a>
            <a class="btn btn-outline-light btn-social mx-2" target="_blank" href="https://www.facebook.com/PrefeituradeCanoas" aria-label="Facebook"><i class="fab fa-facebook-f fa-2x"></i></a>
            <a class="btn btn-outline-light btn-social mx-2" target="_blank" href="https://www.instagram.com/prefcanoas/" aria-label="Instagram"><i class="fab fa-instagram fa-2x"></i></a>
          </div>
        </div>
        
        <hr>

        <div class="row footer-link">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-4">
            <a class="link-dark text-decoration-none me-3 footer-link-item" href="#!">Vagas</a>
          </div>
              
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-4">
            <a class="link-dark text-decoration-none me-3 footer-link-item" href="#!">Política de Privacidade</a>
          </div>
              
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-4">
            <a class="link-dark text-decoration-none me-3 footer-link-item" href="#!">Perguntas Frequentes</a>
          </div>
              
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-4">
            <a class="link-dark text-decoration-none me-3 footer-link-item" href="#!">Fale Conosco</a>
          </div>
        </div>
      </div>
    </footer>

    <div class="bg-canoas  py-2 text-center text-white">
      <div class="container"><small>Copyright &copy; CanoasTec {{ nowYear }}</small></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import gsap from 'gsap';
const axios = require('axios');
const moment = require('moment');
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      amountCandidate: 0,
      amountVisitors: 0,
      amountVacancy: 0,
      amountCompany: 0,
      vacancies: [],
      objectives: [],
      nowYear: moment().format('YYYY'),
    }
  },
  created() {
    axios.get('https://dsv.pmcanoas.rs.gov.br/bdomobilews/info/quantitativo')
      .then(function (response) {
        gsap.to(this, { duration: 1, amountCandidate: response.data.data.amountCandidate });
        gsap.to(this, { duration: 1, amountCompany: response.data.data.amountCompany });
        gsap.to(this, { duration: 1, amountVacancy: response.data.data.amountVacancy });
        gsap.to(this, { duration: 1, amountVisitors: response.data.data.amountVisitors });
      }.bind(this));
   
   axios.get('https://dsv.pmcanoas.rs.gov.br/bdomobilews/vagas/ultimas-vagas')
    .then(function (response) {
      this.vacancies = response.data;
    }.bind(this));
   
   axios.get('https://dsv.pmcanoas.rs.gov.br/bdomobilews/info/objetivo')
    .then(function (response) {
      this.objectives = response.data.data;
    }.bind(this));
  }
};
</script>

<style scoped>
  header.masterhead {
    padding-top: 14rem;
    padding-bottom: 10rem;
    background-color: #144334;
  }
  .masterhead-image {
    width: 27em;  
  }
  .quantitative-information-item {
    padding: 2em;
    width: 8em;
    height: 8em;
    border-radius: 100%;
    background-image: linear-gradient(to bottom right, #2B8F6F , #42DBAB);
  }

  .page-section {
    padding: 6rem 0;
  }
  .carousel-item {
    height: 25rem;
  }
  .last-vacancies, .area-user {
    background: #2B8F6F;
  }

  .page-section-title {
    font-weight: bold;
    color: #fff;
    text-shadow: 0.1em 0.1em 0.2em #000;
  }

  .carousel-caption {
    color: #000;
    background-color: #fff;
    padding: 1em 3em;
    height: 90%;
    border-radius: 0.5em;
  }
  .area-user-item {
    color: #000;
    background-color: #fff;
    height: 20em;
    border-radius: 0.5em;
    margin-top: 1em;
  }

  .carousel-vacancies-description {
    word-wrap: break-word!important;
    word-break: break-word!important;
    height: 22%;
    overflow: hidden;
  }
  .carousel-indicators [data-bs-target] {
    margin-bottom: 0;
  }
  .carousel-indicators [data-bs-target] {
    background-color: #000;
  }

  .information-objective .card {
    border: 2px solid #2B8F6F;
    text-align: justify;
    box-shadow: 5px 5px 5px  #ccc;
  }
  .information-objective .card-header {
    background-image: linear-gradient(to bottom right, #2B8F6F , #42DBAB);
    color: #fff;
  }

  .btn-social {
    height: 3rem;
    width: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
    background-image: linear-gradient(to bottom right, #2B8F6F , #42DBAB);
  }

  .footer-link-item:hover {
    background-image: linear-gradient(to bottom right, #2B8F6F , #42DBAB);
    padding: 1em 2em;
    border-radius: 4px;
    color: #fff;
  }
</style>