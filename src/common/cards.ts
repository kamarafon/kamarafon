import * as _ from 'lodash'

export enum CategoryTag {
  Simple = 'просто', Tricky = 'хитро', Athletics = 'сложно', OnlyShe = 'она', OnlyHe = 'он', SixNine = '69'
}

interface NewCategoryType {
  title: string
  name: string
  ids: { [key in CategoryTag]?: number[] }
}

export const newCategories: NewCategoryType[] = [
  {
    title: 'на кровати',
    name: 'bed',
    ids: {
      [CategoryTag.Simple]: [3, 6, 7, 9, 10, 17, 18, 19, 29, 30, 35, 38, 39, 44, 46, 49, 52, 56, 59, 60, 67, 71, 72, 73, 76, 77, 81, 82, 83, 84, 90, 94, 96, 110, 112, 114, 116, 118, 120, 121, 123, 133, 142, 143, 145, 147, 151, 153, 155, 156, 158, 159, 164, 170, 173, 175, 180, 184, 187, 191, 197, 198, 201, 206, 208, 210, 218, 220, 224, 227, 230, 239, 240, 242, 244, 252, 255, 262, 265, 268, 270, 275, 276, 279, 283, 284, 286, 287, 292, 296, 297, 300, 303, 306, 309, 310, 311, 313, 314, 319, 323, 326, 327, 329, 335, 336, 343, 345, 348, 350, 354, 356, 359, 360, 363, 365],
      [CategoryTag.Tricky]: [1, 16, 28, 33, 36, 40, 41, 48, 78, 85, 89, 91, 100, 105, 106, 108, 113, 125, 127, 134, 136, 140, 141, 152, 174, 202, 205, 209, 211, 212, 223, 235, 243, 245, 251, 259, 261, 266, 269, 281, 289, 295, 317, 324, 339, 341, 344, 346, 349, 353, 358, 364],
      [CategoryTag.Athletics]: [93, 103, 176, 181, 182, 204, 214, 226, 232, 249, 253, 256, 282, 285, 291, 312],
      [CategoryTag.OnlyShe]: [20, 51, 53, 68, 80, 99, 124, 149, 161, 169, 178, 188, 213, 231, 238, 248, 278, 302, 315, 320, 331, 340, 352,],
      [CategoryTag.OnlyHe]: [15, 25, 31, 34, 43, 74, 86, 95, 102, 107, 135, 138, 146, 154, 163, 196, 247, 260,],
      [CategoryTag.SixNine]: [55, 63, 130, 144, 162, 195, 217, 274, 305, 308,],
    },
  },
  {
    title: 'на столе',
    name: 'table',
    ids: {
      [CategoryTag.Simple]: [5, 14, 58, 79, 87, 126, 131, 246, 250],
      [CategoryTag.Tricky]: [190],
      [CategoryTag.Athletics]: [23, 101, 104],
    },
  },
  {
    title: 'в кресле',
    name: 'chair',
    ids: {
      [CategoryTag.Simple]: [32, 126, 160, 185, 199, 207, 221, 237, 254, 258, 280, 298],
      [CategoryTag.Tricky]: [13, 26, 42, 47, 92, 115, 122, 132, 148, 192, 211, 228, 243, 318],
      [CategoryTag.Athletics]: [64, 66, 98, 111, 117, 129, 139, 179, 186, 215, 229, 233, 241, 273, 277, 290, 307, 321],
      [CategoryTag.OnlyShe]: [189, 325, 328,],
      [CategoryTag.OnlyHe]: [97,],
      [CategoryTag.SixNine]: [172, 219,]
    },
  },
  {
    title: 'на полу',
    name: 'floor',
    ids: {
      [CategoryTag.Simple]: [24, 57, 79, 87, 145, 165, 167, 177, 194, 203, 250, 280, 293, 316, 334,],
      [CategoryTag.Athletics]: [37, 45, 50, 54, 93, 109, 157, 183, 186, 193, 225, 233, 253, 272, 304, 321, 330, 361],
      [CategoryTag.OnlyHe]: [11, 299],
      [CategoryTag.OnlyShe]: [88, 128, 171, 200, 257, 342, 357,],
      [CategoryTag.SixNine]: [294,],
    }
  },
  {
    title: 'на пуфике',
    name: 'pouf',
    ids: {
      [CategoryTag.Simple]: [4, 62, 65, 70, 150, 160, 185, 236, 246, 267, 301, 333, 337, 347],
      [CategoryTag.Tricky]: [13, 26, 27, 92, 122, 190, 228],
      [CategoryTag.Athletics]: [2, 183, 264],
      [CategoryTag.OnlyHe]: [12, 22],
      [CategoryTag.OnlyShe]: [338,]
    }
  },
  {
    title: 'на мяче',
    name: 'fit-ball',
    ids: {
      [CategoryTag.Simple]: [21, 165, 216, 101, 137, 165, 322, 355, 362],
      [CategoryTag.Tricky]: [234],
      [CategoryTag.Athletics]: [61, 69, 75, 119, 166, 168, 216, 222, 263, 332, 351],
      [CategoryTag.OnlyShe]: [8, 271],
      [CategoryTag.OnlyHe]: [288,],
    }
  },
]

export const getCategoryIdsByName = (category: NewCategoryType, tag: CategoryTag): number[] => {
  return category.ids[tag]?.map(offsetCategoryIds) ?? []
}

const pathNumbersCount = 3
const cardsOffset = 4
const cardsCount = 365
const offsetCategoryIds = (id: number) => id + cardsOffset - 1

export const numberToPath = (n: number): string => `/pages/365_dney_seksa-${_.padStart(`${n}`, pathNumbersCount, '0')}.jpg`
export const createCartNumbers = () => new Array(cardsCount).fill(null).map((__, n) => n + cardsOffset)
export const randomizeCardNumbers: (ns: number[]) => number[] = _.shuffle
export const cardsPage = (ns: number[], count: number, page: number) => _.chain(ns)
  .chunk(count)
  .get(page)
  .value()
