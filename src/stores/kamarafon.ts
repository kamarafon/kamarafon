import {createStoreManager} from '@/stores/store-manager'
import {defineStore} from 'pinia'
import {createCartNumbers, randomizeCardNumbers} from '@/cards/utils'
import {ref} from 'vue'

const storeName = 'kamarafon'
const storeManager = createStoreManager(storeName)

export const useKamarafonStore = defineStore(storeName, {
  state() {
    const loadedState = storeManager.load({
      cardIds: [] as number[]
    })
    return {
      ... loadedState,
      cardIds: ref(loadedState.cardIds)
    }
  },
  actions: {
    createCards() {
      this.cardIds = randomizeCardNumbers(createCartNumbers())
      storeManager.persist(this.$state)
    },
  },
})
