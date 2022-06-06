<template>
  <div class="faq">
    <div class="container">
    
      <div class="accordion accordion-flush" id="faq_items">
        <div class="accordion-item" v-for="faq in faqs" :key="faq.id">
          <h2 class="accordion-header" :id="'heading'+faq.id">
            <button class="accordion-button bg-canoas text-white" type="button"  data-bs-toggle="collapse" :data-bs-target="'#collapse'+faq.id" aria-expanded="true" :aria-controls="'collapse'+faq.id">
              {{ faq.question }}
            </button>
          </h2>
          <div :id="'collapse'+faq.id" class="accordion-collapse collapse" aria-labelledby="'heading'+faq.id" data-bs-parent="#faq_items">
            <div class="accordion-body">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<style scoped>
  .accordion-collapse{
    box-shadow: 5px 5px 5px #ccc, -3px 3px 5px #ccc;
  }
  .accordion-item {
    margin-bottom: 1em;
  }
</style>
<script>
const axios = require('axios');

export default {
  name: "Faq",
  data() {
    return {
      faqs: []
    }
  },
  methods: {
    get(){
      axios.get('https://dsv.pmcanoas.rs.gov.br/bdomobilews/faq')
        .then(function (response) {
          this.faqs = response.data.data;
        }.bind(this));
    }
  },
  mounted(){
    this.get();
  }
};
</script>

