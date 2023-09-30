<script setup lang="ts">
import WelcomeGame from '@/components/WelcomeGame.vue'
import router from '@/router'
import {useKamatcherStore} from '@/stores/kamatcher'
import {Gender} from '@/common/gender'
import {genderClothesCount, KamatcherClothesByGender} from '@/common/clothes'
import * as _ from 'lodash'

const store = useKamatcherStore()
const cardsNumber = [2, 3, 4]
const selectCard = (n: number) => {
  store.prepareGame()
  router.push({
    name: 'kamatcher-choice',
    params: {cards: n, level: 0},
    query: {w: genderClothesCount(Gender.Woman), m: genderClothesCount(Gender.Man)}
  })
}

const herClothes = _.values(KamatcherClothesByGender[Gender.Woman])
const hisClothes = _.values(KamatcherClothesByGender[Gender.Man])

const clothesShouldBe = [
  {
    title: 'Она одевает',
    clothes: herClothes,
  },
  {
    title: 'Он одевает',
    clothes: hisClothes,
  }
]
</script>

<template>
  <main class="uk-flex uk-flex-column">
    <welcome-game class="uk-height-1-1 uk-overflow-auto">
      <template v-slot:title>kamatcher</template>
      <template v-slot:description>
        <h3>Подготовка к игре</h3>
        <p>
          В этой игре, у каждого из партнёров одето по 5 элементов одежды
        </p>
        <div class="clothes-description">
          <div class="clothes-name" v-for="clothes in clothesShouldBe">
            <p>{{ clothes.title }}</p>
            <ul>
              <li v-for="c in clothes.clothes">{{ c[1] || c[0] }}</li>
            </ul>
          </div>
        </div>
        <p>Элементы одежды не обязательно должны быть такими же, главное что бы их было 5, на каждом партнёре</p>
        <h3>Правила игры</h3>
        <ul>
          <li>Сначала вы выбираете количество карт на один круг игры (2, 3, 4)</li>
          <li>Когда игра начинается один из партнёров отворачивается, а другой выбирает позу в которой хотел бы заняться
            сексом
          </li>
          <li>Затем выбор делает другой партнёр</li>
          <li>Если вы выбирете одну и ту же позу, то вам можно заняться сексом в этой позе</li>
          <li>Если на вас есть какая-то одежда, то вы занимаетес сексом в одежде (т.е. просто имитеруете половой акт)
          </li>
          <li>После каждого хода вы можете потерять одежду, выбора происходит случайно</li>
          <li>Игра продолжается пока вы не потеряете всю одежду, и полностью голыми не найдёте позу которая понравиться
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

<style lang="stylus" scoped>
</style>