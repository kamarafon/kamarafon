import {defineStore} from 'pinia'
import * as _ from 'lodash'

const persist = (state: any) => {
  localStorage.setItem('state', JSON.stringify(state))
}

interface State {
  imageIndexes: number[],
}

const load = (): State => {
  const state = localStorage.getItem('state')
  if (state) return JSON.parse(state)

  return {
    imageIndexes: []
  }
}

export const useStore = defineStore('store', {
  state() {
    return load()
  },
  actions: {
    generateImageIndexes() {
      this.imageIndexes = _.shuffle(
        new Array(365).fill(null).map((__, index) => index + 4)
      )
      persist(this.$state)
    },
  },
})
