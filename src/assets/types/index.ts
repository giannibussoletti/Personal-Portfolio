import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
export type StackIconTypes = {
  icon: IconDefinition
  value: string
  color?: string
}

export type SocialLinkIconTypes = StackIconTypes & {
  url: string
}

export type LanguageArrayType = {
  code: string
  name: string
  flag: string
}

export type StackComponentType = {
  array: StackIconTypes[]
  title: string
}

export type Lang = "it" | "en"

export type ProjectType = {
  title: string
  description: Record<Lang, string>
  stack: string[]
  imgLink?: string
  textBack?: Record<Lang, string[]>
  repoLink: string
  demoLink?: string
}
