<template>
  <div class="vacancies container">
    <div class="row mb-5" v-for="vacancy in vacancies" :key="vacancy.id">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header bg-canoas text-white">
            <div class="row">
              <div class="col-11">
                {{ vacancy.title }}
              </div>
              <div class="col-1">
                Vagas: {{ vacancy.numberJobsOpportunities }}
            </div>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">Descrição</h6>
            <p class="card-text">
              {{ vacancy.description }}
            </p>
            <p class="card-text">
              {{ vacancy.note }}
            </p>
            <h6 class="card-title">Empresa</h6>
            <p class="card-text">
              {{ vacancy.company.nameFantasy ? vacancy.company.nameFantasy : 'Confidencial' }}
            </p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-2">
                <i v-if="vacancy.genre == 'M'" class="fa-solid fa-mars" title="Destinado ao candidatos masculinos"></i>
                <i v-if="vacancy.genre == 'F'" class="fa-solid fa-venus" title="Destinada às candidatas femininas"></i>

                <i v-if="vacancy.disabledPeople == 'S'" class="fa-brands fa-accessible-icon" title="Destinado a PCD"></i>

                <i v-if="vacancy.driverLicense == 'S'" class="fa-solid fa-steering-wheel" title="Necessário ter CNH"></i>
              </div>

              <div class="col-10 text-end">
                Cadastrada a {{ diffDays(vacancy.registrationDate) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    box-shadow: 7px 7px 5px #ccc;
  }
</style>

<script>
  const axios = require('axios');
  const moment = require('moment');
  export default {
    name: "Vacancies",
    data() {
      return {
        vacancies: []
      }
    },
    methods: {
      diffDays(date){
        date = moment(date, 'YYYY-MM-DD');
        
        let years = moment().diff(date, 'years');
        if(years == 1) return years + ' ano';
        if(years > 1) return years + ' anos';

        let months = moment().diff(date, 'months');
        if(months == 1) return months + ' mês';
        if(months > 1) return months + ' meses';

        let days = moment().diff(date, 'days');
        if(days == 1) return days + ' dia';
        if(days > 1) return days + ' dias';

        let hours = moment().diff(date, 'hours');
        if(hours == 1) return hours + ' hora';
        if(hours > 1) return hours + ' horas';
        
        let minutes = moment().diff(date, 'minutes');
        if(minutes == 1) return minutes + ' minuto';
        if(minutes > 1) return minutes + ' minutos';

        let seconds = moment().diff(date, 'seconds');
        return seconds + ' segundos';
      },
      get(){
        axios.get('https://dsv.pmcanoas.rs.gov.br/bdomobilews/vagas')
          .then(function (response) {
            this.vacancies = response.data;
          }.bind(this));
      }
    },
    mounted(){
      this.get();
    }
  };
</script>
