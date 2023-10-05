import {ref} from 'vue'
import {cardCategories, categoryTags, randomizeCardNumbers} from '@/common/cards'
import type {CategoryType} from '@/common/cards'
import * as _ from 'lodash'

interface StoreManager {
  persist(state: any): void

  load<S>(defaultData: S): S
}

export function createStoreManager(name: string): StoreManager {
  return {
    persist(state: any) {
      localStorage.setItem(name, JSON.stringify(state))
    },
    load<S>(defaultData: S): S {
      const data = localStorage.getItem(name)
      if (data) try {
        return JSON.parse(data)
      } catch (e) {
        console.log('Error with data parsing', data)
      }
      return defaultData
    },
  }
}

export function createStoreWithCardIds(storeManager: StoreManager) {
  return {
    state() {
      const loadedState = storeManager.load({
        cardIds: [] as number[]
      })
      return {
        ...loadedState,
        cardIds: ref(loadedState.cardIds)
      }
    },
    actions: {
      prepareGame(categories: string[] = [], tags: string[] = []) { // todo update new categories
        const self = this as any
        self.cardIds = prepareCards(categories, tags)
        storeManager.persist(self.$state)
      },
    },
  }
}

export const filterCategories = (categories: CategoryType[], categoryNames: string[], tags: string[]): number[] =>
  _.chain(categories)
    .filter(c => categoryNames.includes(c.name))
    .map(c => _.pick(c.ids, tags))
    .map(ids => _.values(_.pick(ids, tags)))
    .flattenDeep()
    .uniq()
    .sort(_.subtract)
    .value()

export const prepareCards = (categoryNames: string[], tags: string[]): number[] => {
  if (_.isEmpty(categoryNames)) categoryNames = cardCategories.map(c => c.name)
  if (_.isEmpty(tags)) tags = categoryTags()
  let catIds = filterCategories(cardCategories, categoryNames, tags)

  return randomizeCardNumbers(catIds)
}
