import {Gender} from '@/common/gender'
import type {KamatcherClothes} from '@/common/clothes'
import * as _ from 'lodash'
import {KamatcherClothesByGender} from '@/common/clothes'

export interface Task {
  title: string
  description: string[]
}

const forWho = {
  [Gender.Woman]: {
    who: 'неё',
    thd: 'она',
  },
  [Gender.Man]: {
    who: 'него',
    thd: 'он',
  },
}

export type ClothesByGender = { [key in Gender]: number[] }

const clothesToUndressDescription = (clothes: KamatcherClothes, gender: Gender): string => {
  const parts = KamatcherClothesByGender[gender][clothes]
  return `${forWho[gender].thd} снимает ${parts[1] || parts[0]}`
}

export const createCombinedTask = (clothes: ClothesByGender, hasClothes: boolean): Task => {
  const clothesToRemove = _.chain(clothes)
    .toPairs()
    .filter(([__, v]) => v > -1)
    .fromPairs()
    .map(clothesToUndressDescription)
    .value()

  // todo error
  const basicTask = hasClothes
    ? 'Повторите то, что вам обоим понравилось, только в оставшейся на вас одежде'
    : 'Займитесь "этим", в выбранной позе, ведь на вас уже нет одежды'

  return {
    title: 'Задание для двоих',
    description: [
      ...clothesToRemove,
      basicTask
    ]
  }
}
export const createSingleTask = (clothes?: ClothesByGender, gender: Gender): Task => {
  const description = clothes[gender] > -1 && [clothesToUndressDescription(clothes[gender], gender)]
  return {
    title: 'Задание для ' + forWho[gender].who,
    description: description || ['Продолжай играть'],
  }
}
