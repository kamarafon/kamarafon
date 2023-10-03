<script setup lang="ts">
import WelcomeGame from '@/components/WelcomeGame.vue'
import {useKamarafonStore} from '@/stores/kamarafon'
import {cardCategories, categoryNames} from '@/common/cards'
import {ref} from 'vue'
import * as _ from 'lodash'
import router from '@/router'

const store = useKamarafonStore()
const categoriesForm = _.chain(categoryNames)
  .map(k => [k, true])
  .fromPairs()
  .value() as any
const selectedCategories = ref(categoriesForm)

const prepareGame = () => {
  store.prepareGame(
    _.chain(selectedCategories.value)
      .toPairs()
      .filter(([__, v]) => v)
      .fromPairs()
      .keys()
      .value()
  )
  router.push({name: 'kamarafon-game', params: {level: 0}})
}
</script>

<template>
  <main class="uk-flex uk-flex-column">
    <welcome-game>
      <template v-slot:title>kamarafon</template>
      <template v-slot:description>
        <p>В этой игре вам предстоит испытать каждую поза "в деле"</p>
        <p>
          Партнёр, на каждом уровне, должен проникать в партнёршу, определённое количество раз, соответствующее номеру
          уровня,
          в указанной на изображении позе:
        </p>
        <ul class="uk-list uk-list-collapse uk-list-hyphen">
          <li>на первом уровне, он входит в партнёршу - один раз</li>
          <li>на втором, два раза</li>
          <li>и так далее, пока не закончит акт</li>
        </ul>
        <p>
          Если поза подразумевает аральные ласки, значит необходимо, точно также выполнить их соответствующее
          количество
        </p>
      </template>
    </welcome-game>
    <div class="uk-margin-bottom uk-overflow-auto uk-height-large">
      <div class="uk-text-center uk-margin-bottom">
        <button class="uk-button uk-button-danger" @click="prepareGame()">начать</button>
      </div>
      <div class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@m uk-child-width-1-6@l" uk-grid>
        <div v-for="(category, key) in cardCategories">
          <label class="uk-text-middle uk-width-1-1 uk-display-block">
            <span class="uk-label uk-width-1-1 uk-overflow-hidden"
                  :class="{'uk-label-danger': selectedCategories[key]}">
              {{ category.title }}
            </span>
            <input type="checkbox" class="uk-hidden" v-model="selectedCategories[key]" :value="key"/>
          </label>
        </div>
        <div>
          <span class="uk-label uk-label-warning" @click="selectedCategories = {}">сбросить всё</span>
        </div>
      </div>
    </div>
  </main>
</template>
