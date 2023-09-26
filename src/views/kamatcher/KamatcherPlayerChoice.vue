<script lang="ts" setup>
import router from '@/router'
import {useKamatcherStore} from '@/stores/kamatcher'
import {cardsPage} from '@/common/cards'
import KamatcherConfirmation from '@/views/kamatcher/KamatcherConfirmation.vue'
import {Gender} from '@/common/gender'
import {ref} from 'vue'
import {parseIntParams} from '@/common/extensions'
import KamatcherShowCards from '@/views/kamatcher/KamatcherShowCards.vue'
import * as _ from 'lodash'

const currentRoute = router.currentRoute.value
const {cards, level, choice} = parseIntParams(currentRoute.params, ['cards', 'level', 'choice'])
const currentPlayer = choice && Gender.Man || Gender.Woman
const store = useKamatcherStore()
const selectedCard = ref(null as number | null)
const cardsPageIds = cardsPage(store.cardIds, cards, level)
const page = cardsPageIds.map(card => ({card, gender: currentPlayer}))

const cardWithTask = () => _.chain(cardsPageIds).shuffle().first().value()
const select = (id: number) => {
  if (!choice) return router.push(
    {name: 'kamatcher-choice', params: {cards, level, choice: id}, query: currentRoute.query}
  )

  router.push({
    name: 'kamatcher-results',
    params: {cards, level, woman: choice, man: id},
    query: {...currentRoute.query, c: cardWithTask()}
  })
}
</script>

<template>
  <main class="kamatcher" :class="'kamatcher-player-' + Gender[currentPlayer]" >
    <kamatcher-show-cards :page="page" @select="selectedCard = $event"></kamatcher-show-cards>
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
@import "../../assets/utils.styl"

.kamatcher
  &.kamatcher-player-Woman
    gender-highlight($color-she)

  &.kamatcher-player-Man
    gender-highlight($color-he)
</style>
