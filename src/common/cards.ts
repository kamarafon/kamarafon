import * as _ from 'lodash'

// last 141

interface CategoryType {
  title: string
  ids: number[]
}

const categoriesByOriginIds = {
  simple: {
    title: 'Всё гениальное просто',
    ids: [
      3, 4, 5, 6, 7, 9, 10, 14, 17, 18, 19, 21, 24, 29, 30, 32, 35, 38, 39, 44, 46, 49, 52, 56, 57, 58, 59, 60, 62, 65,
      67, 70, 71, 72, 73, 76, 77, 79, 81, 82, 83, 84, 87, 90, 94, 96, 110, 112, 114, 116, 118, 120, 121, 123, 126, 131,
      133,
    ],
  },
  athletic: {
    title: 'Сила любви',
    ids: [
      2, 11, 23, 37, 45, 50, 54, 61, 64, 66, 69, 75, 93, 98, 101, 103, 104, 109, 111, 117, 119, 128, 129, 137, 139,
    ],
  },
  tricky: {
    title: 'Хитро-выдуманные',
    ids: [
      1, 13, 16, 26, 27, 28, 33, 36, 40, 41, 42, 47, 48, 78, 85, 89, 91, 92, 100, 105, 106, 108, 113, 115, 122, 125,
      127, 132, 134, 136, 141,
    ]
  },
  onlyWoman: {
    title: 'Она будет довольна',
    ids: [8, 20, 51, 53, 68, 80, 88, 99, 124, 128,],
  },
  sheTop: {
    title: 'Её счастье сверху',
    ids: [
      1, 3, 6, 9, 17, 18, 27, 29, 32, 33, 36, 38, 40, 41, 48, 60, 61, 67, 70, 75, 81, 82, 89, 90, 94, 96, 98, 103, 108,
      111, 115, 117, 119, 120, 122, 123, 127, 129, 140,
    ]
  },
  onlyMan: {
    title: 'Соблазни его',
    ids: [11, 12, 15, 25, 31, 34, 43, 74, 86, 95, 97, 102, 107, 135, 138,],
  },
  heFromBack: {
    title: 'Вид с зади',
    ids: [
      2, 5, 13, 21, 24, 28, 37, 39, 45, 47, 52, 56, 57, 58, 59, 64, 65, 73, 76, 78, 83, 85, 87, 101, 105, 109, 114,
      116, 118, 121, 125, 126, 131, 132, 133, 134, 137, 139,
    ],
  },
  heTop: {
    title: 'Лицом к лицу',
    ids: [
      4, 7, 10, 14, 16, 19, 23, 26, 30, 35, 42, 44, 46, 49, 50, 61, 66, 69, 71, 72, 77, 79, 84, 91, 93, 104, 106,
      110, 112, 113, 141,
    ],
  },
  anal: {
    title: 'Вход через заднюю дверь',
    ids: [10, 24, 39, 56, 57, 58, 65, 73, 76, 82, 83, 90, 101, 116, 121, 123, 125, 131, 140,],
  },
  onTheTable: {
    title: 'Накрываем на стол',
    ids: [5, 14, 23, 58, 61, 75, 79, 87, 101, 104, 126, 131,]
  },
  onTheChair: {
    title: '12 стульев',
    ids: [13, 26, 32, 42, 47, 64, 66, 92, 97, 98, 111, 115, 117, 122, 126, 129, 132, 139,],
  },
  fitBall: {
    title: 'Команда вводит мяч в игру',
    ids: [8, 21, 61, 69, 75, 101, 119, 137,]
  },
  inTheBed: {
    title: 'Любовное ложе',
    ids: [
      1, 3, 6, 7, 9, 10, 15, 16, 17, 18, 20, 25, 28, 29, 30, 31, 33, 34, 35, 36, 38, 39, 40, 41, 43, 44, 46, 48, 49,
      51, 52, 53, 55, 56, 59, 60, 63, 67, 68, 71, 72, 73, 74, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 89, 90, 91, 93,
      94, 95, 96, 99, 100, 102, 103, 105, 106, 107, 108, 110, 112, 113, 114, 116, 118, 120, 121, 123, 124, 125, 127,
      130, 133, 134, 135, 136, 138, 140, 141,
    ],
  },
  onThePoof: {
    title: 'Отличный пуфик',
    ids: [2, 4, 12, 13, 22, 26, 27, 62, 65, 70, 92, 122,]
  },
  onTheFloor: {
    title: 'Пол больше чем кровать',
    ids: [11, 24, 37, 45, 50, 54, 57, 79, 87, 88, 93, 109, 128,]
  },
  six9: {
    title: '69',
    ids: [22, 55, 63, 130,]
  }
}

const pathNumbersCount = 3
const cardsOffset = 4
const cardsCount = 365

export const cardCategories = _.chain(categoriesByOriginIds)
  .mapValues(category => {
    category.ids = category.ids.map(id => id + cardsOffset - 1)
    return category
  })
  .value() as {[key in string]: CategoryType}

export const numberToPath = (n: number): string => `/pages/365_dney_seksa-${_.padStart(`${n}`, pathNumbersCount, '0')}.jpg`
export const createCartNumbers = () => new Array(cardsCount).fill(null).map((__, n) => n + cardsOffset)
export const randomizeCardNumbers: (ns: number[]) => number[] = _.shuffle
export const cardsPage = (ns: number[], count: number, page: number) => _.chain(ns)
  .chunk(count)
  .get(page)
  .value()
