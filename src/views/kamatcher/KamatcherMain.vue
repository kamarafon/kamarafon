<script setup lang="ts">
import WelcomeGame from '@/components/WelcomeGame.vue'
import router from '@/router'
import {useKamatcherStore} from '@/stores/kamatcher'
import {clothesCount} from '@/views/kamatcher/tasks-generator'

const store = useKamatcherStore()
const cardsNumber = [2, 3, 4]
const selectCard = (n: number) => {
  store.prepareGame()
  router.push({
    name: 'kamatcher-choice',
    params: {cards: n, level: 0},
    query: {w: clothesCount, m: clothesCount}
  })
}

</script>

<template>
  <main class="uk-flex uk-flex-column">
    <welcome-game class="uk-height-1-1 uk-overflow-auto">
      <template v-slot:title>kamatcher</template>
      <template v-slot:description>
        <h3 class="uk-text-danger">Подготовка к игре</h3>
        <p>
          В этой игре, у каждого из партнёров одето по {{ clothesCount }} элементов одежды один из которых должен быть трусы,
          и они снимаются самыми последними
        </p>
        <h3 class="uk-text-danger">Правила игры</h3>
        <ul>
          <li>Сначала вы выбираете количество карт на один круг игры (2, 3, 4)</li>
          <li>Когда игра начинается один из партнёров отворачивается, а другой выбирает позу в которой хотел бы заняться
            сексом
          </li>
          <li>Затем выбор делает другой партнёр</li>
          <li>Если вы выбирете одну и ту же позу, то вам можно заняться сексом в этой позе</li>
          <li>
            Если на вас есть какая-то одежда, то вы занимаетесь сексом в одежде (т.е. просто имитеруете половой акт)
          </li>
          <li>После каждого хода вы можете потерять одежду, выбора происходит случайно</li>
          <li>
            Игра продолжается пока вы не потеряете всю одежду, и полностью голыми не найдёте позу которая понравиться
            вам обоим
          </li>
        </ul>
      </template>
    </welcome-game>

    <div uk-grid class="uk-child-width-expand@s uk-margin-top uk-margin-bottom">
      <div v-for="n in cardsNumber" class="uk-text-center">
        <button class="uk-button uk-button-danger uk-button-large uk-width-1-1"
                @click="selectCard(n)">
          {{ n }} позы
        </button>
      </div>
    </div>
  </main>
</template>
