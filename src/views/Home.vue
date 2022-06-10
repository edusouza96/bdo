<template>
  <div class="home">

    <header class="masterhead">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-lg-6 text-xs-center text-sm-center text-md-center text-lg-start">
              <img src="../assets/logo.png" alt="logo banco de oportunidades" class="masterhead-image">
            </div>
            <div class="col-xs-12 col-lg-6 text-xs-center text-sm-center text-md-center text-lg-end">
              <img src="../assets/brasao.png" alt="brasao prefeitura de canoas" class="masterhead-image mt-5">
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
                <h2>{{ vacancy.title }}</h2>
                <hr class="text-canoas-secondary">
                <p><strong>Descrição</strong></p>
                <p>{{ vacancy.description }}</p>
                <p>
                  <strong>Nº de Vagas</strong>
                  {{ vacancy.numberJobsOpportunities }}
                </p>
                <p class="text-end"><a class="btn btn-lg btn-outline-light" href="#">Veja mais</a></p>
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
    

  </div>
</template>

<script>
// @ is an alias to /src
import gsap from 'gsap';
const axios = require('axios');
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
  .last-vacancies {
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
    padding: 3em 3em;
    border-radius: 0.5em;
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
</style>