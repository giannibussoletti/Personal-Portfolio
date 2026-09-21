import {
  faBootstrap,
  faCss,
  faEnvira,
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
import type { LanguageArrayType, SocialLinkIconTypes, StackIconTypes } from "../types"
import { faEnvelope, faLeaf } from "@fortawesome/free-solid-svg-icons"

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
  { icon: faGithub, value: "GitHub", url: "https://github.com/giannibussoletti" },
  { icon: faEnvelope, value: "Mail", url: "mailto:info@giannibussoletti.it" },
]

export const arrayLang: LanguageArrayType[] = [
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "en", name: "English", flag: "🇬🇧" },
]
