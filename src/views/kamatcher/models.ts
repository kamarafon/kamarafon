import {Gender} from '@/common/gender'

export interface ShowCard {
  card: number
  gender?: number
  showTask?: boolean
  task?: any
}

export type ClothesByGender = { [key in Gender]: number }

export interface Task {
  title: string
  description: string[]
}
