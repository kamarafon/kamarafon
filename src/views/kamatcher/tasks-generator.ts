import {Gender} from '@/common/gender'
import * as _ from 'lodash'
import type {ClothesToDrop, Task} from '@/views/kamatcher/models'

export const clothesCount = 5

export const forWho = {
  [Gender.Woman]: {
    who: 'неё',
    thd: 'она',
  },
  [Gender.Man]: {
    who: 'него',
    thd: 'он',
  },
}

const clothesToUndressDescription = (gender: Gender): string => {
  return `${forWho[gender].thd} снимает один элемент одежды`
}

export const createCombinedTask = (clothes: ClothesToDrop, hasClothes: boolean): Task => {
  const clothesToRemove: string[] = _.chain(clothes)
    .toPairs()
    .filter(([__, v]) => v)
    .fromPairs()
    .map((c, g) => clothesToUndressDescription(+g))
    .value()

  const basicTask = hasClothes
    ? 'повторите то, что вам обоим понравилось, только в оставшейся на вас одежде'
    : 'займитесь "этим", в выбранной позе, ведь на вас уже нет одежды'

  return {
    title: 'Задание для двоих',
    description: [
      ... clothesToRemove,
      basicTask
    ]
  }
}
export const createSingleTask = (gender: Gender, dropped: boolean): Task => {
  const description = dropped && [clothesToUndressDescription(gender)]
  return {
    title: 'Задание для ' + forWho[gender].who,
    description: description || ['продолжай играть'],
  }
}
