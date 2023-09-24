import {createStoreManager, createStoreWithCardIds} from '@/stores/store-manager'
import {defineStore} from 'pinia'

const storeName = 'kamatcher'
const storeManager = createStoreManager(storeName)
const storeWithCardIds = createStoreWithCardIds(storeManager)

export const useKamatcherStore = defineStore(storeName, {... storeWithCardIds})
