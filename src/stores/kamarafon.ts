import {createStoreManager, createStoreWithCardIds} from '@/stores/store-manager'
import {defineStore} from 'pinia'

const storeName = 'kamarafon'
const storeManager = createStoreManager(storeName)
const storeWithCardIds = createStoreWithCardIds(storeManager)

export const useKamarafonStore = defineStore(storeName, {...storeWithCardIds})
