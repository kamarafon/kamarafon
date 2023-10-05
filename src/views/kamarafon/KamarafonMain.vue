<script setup lang="ts">
import WelcomeGame from '@/components/WelcomeGame.vue'
import {useKamarafonStore} from '@/stores/kamarafon'
import router from '@/router'
import {
  cardCategories,
  CategoryTag,
  categoryTags,
  firstImageByTag,
  firstImageFromCategory,
  numberToPath
} from '@/common/cards'
import {ref} from 'vue'
import * as _ from 'lodash'

const store = useKamarafonStore()
const filters = [
  cardCategories.map(category => ({
    title: category.title,
    name: category.name,
    image: numberToPath(firstImageFromCategory(category))
  })),
  categoryTags().map(tag => ({
    title: tag,
    name: tag,
    image: numberToPath(firstImageByTag(tag as CategoryTag))
  }))
]

const forms = ref(
  filters.map(
    filter => _.fromPairs(
      filter.map(({name}) => [name, true])
    )
  )
)

const prepareGame = () => {
  const [categories, tags] = forms.value
    .map(form =>
      _.chain(form)
        .toPairs()
        .filter(([__, v]) => v)
        .map(([k, __]) => k)
        .value()
    )

  store.prepareGame(categories, tags)
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
    <div class="uk-overflow-auto uk-height-large">
      <div class="uk-text-center uk-margin-bottom">
        <button class="uk-button uk-button-danger" @click="prepareGame()">начать</button>
      </div>

      <div uk-grid class="uk-child-width-1-2 uk-grid-collapse">
        <div v-for="(filter, i) in filters">
          <div uk-grid class="uk-child-width-1-6@l uk-child-width-1-3@m uk-child-width-1-2 uk-grid-collapse">
            <div v-for="f in filter" class="uk-margin-top">
              <label>
                <input type="checkbox" class="uk-hidden" v-model="forms[i][f.name]"/>
                <img :src="f.image" alt="">
                <span class="uk-label uk-width-1-1 uk-text-center"
                      :class="{'uk-label-danger': forms[i][f.name]}">{{ f.title }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
