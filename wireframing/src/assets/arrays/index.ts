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
import {
  optLink,
  gitLink,
  strHTML5,
  strCSS,
  strSASS,
  strTS,
  strJS,
  strReact,
  strBootstrap,
  strJava,
  strSpring,
  strPgSQL,
} from "../variables"

export const stackIconFront: StackIconTypes[] = [
  { icon: faHtml5, value: strHTML5, color: "#ec6231" },
  { icon: faCss, value: strCSS, color: "#639" },
  { icon: faSass, value: strSASS, color: "#cc6699" },
  { icon: faTypescript, value: strTS, color: "#3178C6" },
  { icon: faSquareJs, value: strJS, color: "#efd81c" },
  { icon: faReact, value: strReact, color: "#61dafb" },
  { icon: faBootstrap, value: strBootstrap, color: "#7952b3" },
]

export const stackIconBack: StackIconTypes[] = [
  { icon: faJava, value: strJava, color: "#1f6eb1" },
  { icon: faLeaf, value: strSpring, color: "#6cb52d" },
  { icon: faPostgresql, value: strPgSQL, color: "#000" },
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
    stack: [strHTML5, strCSS, strReact, strTS, strBootstrap, strSASS, strJava, strPgSQL, strSpring],
    imgLink: optLink + "adastra_xlbkgq.png",
    repoLink: gitLink + "FE-AdAdstra-Capstone-EPICODE",
    demoLink: "https://adastracinema.it/",
  },
  {
    title: "Netflix Clone",
    stack: [strHTML5, strCSS, strReact, strTS, strBootstrap, strSASS],
    imgLink: optLink + "netflix_hmdc3p.png",
    repoLink: gitLink + "Netflix-Clone-Refactor-JS-to-TS",
    demoLink: "https://netflixcloneportfolio.vercel.app/",
  },
  {
    title: "Event Management",
    stack: [strJava, strPgSQL, strSpring],
    repoLink: gitLink + "Gestore-per-la-Creazione-e-la-Prenotazione-di-Eventi",
    textBack: [
      "Client → Postman / frontend",
      "Security → Spring Security + JWT",
      "REST controllers → events, bookings, users",
      "Service → business logic",
      "Repository → Spring Data JPA",
      "Database → PostgreSQL",
    ],
  },
]
