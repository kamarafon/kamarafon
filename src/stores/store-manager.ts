import {ref} from 'vue'
import {createCartNumbers, randomizeCardNumbers} from '@/common/cards'

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
      prepareGame() {
        const self = this as any
        self.cardIds = prepareCards()
        storeManager.persist(self.$state)
      },
    },
  }
}

export const prepareCards = () => randomizeCardNumbers(createCartNumbers())
