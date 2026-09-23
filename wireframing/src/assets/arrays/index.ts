import {
  faBootstrap,
  faCss,
  faGithub,
  faHtml5,
  faJava,
  faLinkedin,
  faPostgresql,
  faReact,
  faSass,
  faSquareJs,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons"
import type { LanguageArrayType, ProjectType, SocialLinkIconTypes, StackIconTypes } from "../types"
import { faEnvelope, faLeaf } from "@fortawesome/free-solid-svg-icons"
import { optLink, gitLink } from "../variables"

export const stackIconFront: StackIconTypes[] = [
  { icon: faHtml5, value: "HTML5" },
  { icon: faCss, value: "CSS" },
  { icon: faSass, value: "SASS" },
  { icon: faTypescript, value: "TypeScript" },
  { icon: faSquareJs, value: "JavaScript" },
  { icon: faReact, value: "React" },
  { icon: faBootstrap, value: "Bootstrap" },
]

export const stackIconBack: StackIconTypes[] = [
  { icon: faJava, value: "Java" },
  { icon: faLeaf, value: "Spring Boot" },
  { icon: faPostgresql, value: "PostgreSQL" },
]

export const socialIcon: SocialLinkIconTypes[] = [
  { icon: faLinkedin, value: "Linkedin", url: "https://linkedin.com/in/giannibussoletti/" },
  { icon: faGithub, value: "GitHub", url: gitLink },
  { icon: faEnvelope, value: "info@giannibussoletti.it", url: "mailto:info@giannibussoletti.it" },
]

export const arrayLang: LanguageArrayType[] = [
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "en", name: "English", flag: "🇬🇧" },
]

export const projectArray: ProjectType[] = [
  {
    title: "Adastra Cinema",
    stack: [faBootstrap],
    imgLink: optLink + "adastra_xlbkgq.png",
    repoLink: gitLink + "FE-AdAdstra-Capstone-EPICODE",
    demoLink: "https://adastracinema.it/",
  },
  {
    title: "Netflix Clone",
    stack: [faBootstrap],
    imgLink: optLink + "netflix_hmdc3p.png",
    repoLink: gitLink + "Netflix-Clone-Refactor-JS-to-TS",
    demoLink: "https://netflixcloneportfolio.vercel.app/",
  },
  {
    title: "Gestore eventi",
    stack: [faBootstrap],
    repoLink: gitLink + "Gestore-per-la-Creazione-e-la-Prenotazione-di-Eventi",
    textBack: [
      "Client → Postman / frontend",
      "Sicurezza → Spring Security + JWT",
      "Controller REST → eventi, prenotazioni, utenti",
      "Service → logica di business",
      "Repository → Spring Data JPA",
      "Database → PostgreSQL",
    ],
  },
]
