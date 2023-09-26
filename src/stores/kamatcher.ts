import {createStoreManager, createStoreWithCardIds, prepareCards} from '@/stores/store-manager'
import {defineStore} from 'pinia'
const storeName = 'kamatcher'
const storeManager = createStoreManager(storeName)

export const useKamatcherStore = defineStore(storeName, createStoreWithCardIds(storeManager))
