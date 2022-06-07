import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Faq from "../views/Faq.vue";
import Vacancies from "../views/Vacancies.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/perguntas-frequentes",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/Vagas",
    name: "Vacancies",
    component: Vacancies,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
