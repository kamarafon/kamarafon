<script lang="ts" setup>
import router from '@/router'
import {useKamatcherStore} from '@/stores/kamatcher'
import * as _ from 'lodash'
import {numberToPath} from '@/common/cards'
import {ref} from 'vue'
import KamatcherConfirmation from '@/views/kamatcher/KamatcherConfirmation.vue'
import type {Card} from '@/views/kamatcher/models'

const cardsCount = +router.currentRoute.value.params.cards
const level = +router.currentRoute.value.params.level
const store = useKamatcherStore()
const selectedCard = ref(null as Card | null)
const cards: Card[] = _.chain(store.cardIds)
  .chunk(cardsCount)
  .get(level)
  .map(id => ({
    id,
    path: numberToPath(id)
  }))
  .value()
</script>

<template>
  <main class="kamatcher">
    <div class="cards">
      <div v-for="card in cards" class="card">
        <a href="#" @click.prevent="selectedCard = card">
          <img alt="card" :src="card.path"/>
        </a>
      </div>
    </div>
    <transition>
      <kamatcher-confirmation v-if="selectedCard"
                              @confirmed=""
                              @reject="selectedCard = null"
                              :card="selectedCard"></kamatcher-confirmation>
    </transition>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"
.kamatcher
  box-shadow inset 0 0 3em $color-she

.cards
  display flex
  width 100%

  .card
    margin .5em

    img
      max-width 100%
</style>