import GithubProfile from "../images/github-profile.webp";
import calculoFinanciero from "../images/calculo-financiero.webp";
import Cvinter from '../images/cvinter.webp';
import HeberRamirez from '../images/heberRamirez.png';

export const project = [
    {
      id: 1,
      img: GithubProfile,
      name: "Github Profile",
      description:
        "Buscador de perfiles de github, en el cual puedes encontrar la informacion del usuario mediante el username en github.",
      technologys: ["Vue", "TailwindCSS"],
      github:
        "https://github.com/juanRCoder/proyectos-VUE/tree/main/src/github-profile",
      website: "https://vue-projects-r8hq.vercel.app/github-profile",
    },
    {
      id: 2,
      img: calculoFinanciero,
      name: "Calculo Financiero",
      description:
        "Pagina web con finalidad de mostrar ingresos, gastos y ahorro economicos de manera grafica y expresiva.",
      technologys: ["Angular", "TailwindCSS"],
      github:
        "https://github.com/juanRCoder/proyectos-angular/tree/main/packages/calculo-financiero",
      website: "https://calculo-financiero-ag01.netlify.app/",
    },
    {
      id: 3,
      img: Cvinter,
      name: "CVinter App",
      description:
        "Pagina web en la cual puedes generar tu propio Curriculum tomando como plantilla 5 modelos muy atraticvos para las empresas.",
      technologys: ["React", "TailwindCSS"],
      github:
        "https://github.com/juanRCoder/i002-igrowker-cvinter-front",
      website: "https://i002-cvinter-front-phi.vercel.app/",
    },
    {
      id: 4,
      img: HeberRamirez,
      name: "Web Heber Ramirez",
      description:
        "Pagina web describiendo a mi padre, maestro constructor de obras.",
      technologys: ["Astro", "TailwindCSS"],
      github:
        "https://github.com/juanRCoder/proyectos-astro/tree/main/packages/pagina-heber",
      website: "https://pagina-heber-as01.netlify.app/",
    },
  ];