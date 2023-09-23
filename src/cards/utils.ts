import * as _ from 'lodash'

const pathNumbersCount = 3
const cardsOffset = 4
const cardsCount = 365
export const numberToPath = (n: number): string => `/pages/365_dney_seksa-${_.padStart(`${n}`, pathNumbersCount, '0')}.jpg`
export const createCartNumbers = () => new Array(cardsCount).fill(null).map((__, n) => n + cardsOffset)
export const randomizeCardNumbers: (ns: number[]) => number[] = _.shuffle
