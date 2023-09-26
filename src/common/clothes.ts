import {Gender} from '@/common/gender'
import * as _ from 'lodash'

export enum KamatcherClothes {
  Groin,
  Breast,
  Legs,
  Hips,
  Body,
}

export const KamatcherClothesByGender = {
  [Gender.Woman]: {
    [KamatcherClothes.Groin]: ['трусики'],
    [KamatcherClothes.Breast]: ['бюстгалтер'],
    [KamatcherClothes.Legs]: ['чулки'],
    [KamatcherClothes.Hips]: ['юбка', 'юбку'],
    [KamatcherClothes.Body]: ['кофта', 'кофту'],
  },
  [Gender.Man]: {
    [KamatcherClothes.Groin]: ['трусы'],
    [KamatcherClothes.Breast]: ['галстук'],
    [KamatcherClothes.Legs]: ['носки'],
    [KamatcherClothes.Hips]: ['брюки'],
    [KamatcherClothes.Body]: ['рубаха', 'рубаху'],
  },
}

const KamatcherClosePositionsName = {
  [KamatcherClothes.Groin]: 'пах',
  [KamatcherClothes.Breast]: 'грудь',
  [KamatcherClothes.Legs]: 'ноги',
  [KamatcherClothes.Hips]: 'бёдра',
  [KamatcherClothes.Body]: 'тело',
}

export const genderClothesCount = (gender: Gender) => _.keys(KamatcherClothesByGender[gender]).length

export const createCloseStack = (gender: Gender) => _.range(_.keys(KamatcherClothesByGender[gender]).length)
