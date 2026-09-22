import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type StackIconTypes = {
  icon: IconDefinition
  value: string
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
