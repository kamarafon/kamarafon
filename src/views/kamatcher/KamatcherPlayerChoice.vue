<script lang="ts" setup>
import router from '@/router'
import {useKamatcherStore} from '@/stores/kamatcher'
import * as _ from 'lodash'
import {numberToPath} from '@/common/cards'
import KamatcherConfirmation from '@/views/kamatcher/KamatcherConfirmation.vue'
import type {Card} from '@/views/kamatcher/models'
import {Gender, GenderNames} from '@/common/gender'
import {ref} from 'vue'
import {enumSize} from '@/common/extensions'

const {cards, level, choice} = _.chain(router.currentRoute.value.params)
  .pick(['cards', 'level', 'choice'])
  .mapValues(v => +v)
  .value()

const currentPlayer = choice && Gender.Man || Gender.Woman
const store = useKamatcherStore()
const selectedCard = ref(null as number | null)
const cardsChunk: Card[] = _.chain(store.cardIds)
  .chunk(cards)
  .get(level)
  .value()

router.beforeEach((to, form, next) => {
  next()
})

const select = (id: number) => {
  if (!choice) return router.push(
    {name: 'kamatcher-choice', params: {cards, level, choice: id}}
  )

  router.push({name: 'kamatcher-results', params: {cards, level, woman: choice, man: id}})
}
</script>

<template>
  <main class="kamatcher" :class="'kamatcher-player-' + GenderNames[currentPlayer]" >
    <div class="cards">
      <div v-for="card in cardsChunk" class="card">
        <a href="#" @click.prevent="selectedCard = card">
          <img alt="card" :src="numberToPath(card)"/>
        </a>
      </div>
    </div>
    <transition>
      <kamatcher-confirmation v-if="selectedCard"
                              @confirmed="select($event)"
                              @reject="selectedCard = null"
                              :card="selectedCard"></kamatcher-confirmation>
    </transition>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"

gender-highlight(color)
  box-shadow inset 0 0 3em color

.kamatcher
  &.kamatcher-player-woman
    gender-highlight($color-she)

  &.kamatcher-player-man
    gender-highlight($color-he)

.cards
  display flex
  width 100%

  .card
    margin .5em

    img
      max-width 100%
</style>
