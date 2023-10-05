import {describe, it, expect} from 'vitest'
import {filterCategories} from '../store-manager'
import {cardCategories, CategoryTag} from '../../common/cards'

describe('Cards test', () => {
  it('should filter categories', () => {
    const filtered = filterCategories(
      cardCategories,
      ['floor', 'fit-ball'],
      [CategoryTag.Athletics, CategoryTag.SixNine])

    expect(filtered).toBe([
      40, 48, 53, 57, 64, 72, 78, 96, 112, 122, 160, 169, 171, 186, 189, 196, 219, 225, 228, 236, 256, 266, 275, 297,
      307, 324, 333, 335, 354, 364
    ])
  })
})
