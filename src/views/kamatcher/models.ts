import type {Gender} from '@/common/gender'

export interface ShowCard {
  card: number
  gender?: number
  task?: any
}

export interface Task {
  title: string
  description: string[]
}

export type ClothesToDrop = { [key in Gender]: boolean }
