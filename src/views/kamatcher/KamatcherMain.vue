<script setup lang="ts">
import WelcomeGame from '@/components/WelcomeGame.vue'
import router from '@/router'
import {useKamatcherStore} from '@/stores/kamatcher'

const store = useKamatcherStore()
const cardsNumber = [2, 3, 4]
const selectCard = (n: number) => {
  store.prepareGame()
  router.push({
    name: 'kamatcher-choice', params: {cards: n, level: 0}
  })
}
</script>

<template>
  <main class="main">
    <welcome-game>
      <template v-slot:title>kamatcher</template>
      <template v-slot:description>
        <ul>
          <li>трусы</li>
          <li>галстук (бабочка) / лифчик</li>
          <li>носки / чулки</li>
          <li>штаны (шёрты) / юбка</li>
          <li>рубаха (футболка) / кофта</li>
        </ul>
      </template>
    </welcome-game>
    <ul class="cards-selector">
      <li v-for="n in cardsNumber">
        <button @click="selectCard(n)">{{ n }}</button>
      </li>
    </ul>
  </main>
</template>

<style lang="stylus" scoped>
.main
  display flex
  flex-direction column

.cards-selector
  height 20%
  margin-bottom 1em
  text-align center

  li
    display inline-block
    margin 1.6em .5em

.welcome-game
  height 80%
</style>