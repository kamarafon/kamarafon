<script lang="ts" setup>
import router from '@/router'
import {useKamatcherStore} from '@/stores/kamatcher'
import {cardsPage} from '@/common/cards'
import {Gender} from '@/common/gender'
import {parseIntParams} from '@/common/extensions'
import KamatcherShowCards from '@/views/kamatcher/KamatcherShowCards.vue'
import * as _ from 'lodash'
import type {ShowCard} from '@/views/kamatcher/models'

const currentRoute = router.currentRoute.value
const {cards, level, choice} = parseIntParams(currentRoute.params, ['cards', 'level', 'choice'])
const currentPlayer: Gender = choice && Gender.Man || Gender.Woman
const store = useKamatcherStore()
const cardsPageIds = cardsPage(store.cardIds, cards, level)
const page: ShowCard[] = cardsPageIds.map(card => ({card, gender: currentPlayer}))

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

const genderNames = {
  [Gender.Woman]: 'она',
  [Gender.Man]: 'он',
}

const isWomanChoice = currentPlayer === Gender.Woman
</script>

<template>
  <main class="kamatcher">
    <kamatcher-show-cards :page="page" @select="select($event)"></kamatcher-show-cards>
    <div class="uk-text-center uk-margin-top uk-position-absolute uk-position-top">
      <span class="uk-label uk-text-uppercase" :class="{'uk-label-danger': isWomanChoice}">
        Выбирает {{ genderNames[currentPlayer] }}
      </span>
      <div v-if="isWomanChoice">
        <span class="uk-text-meta">он не подсматривает</span>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"
@import "../../assets/utils.styl"
</style>
