<script setup lang="ts">
import router from '@/router'
import {parseIntParams} from '@/common/extensions'
import {Gender} from '@/common/gender'
import {ref} from 'vue'
import {createCombinedTask, createSingleTask} from '@/views/kamatcher/tasks-generator'
import type {ClothesToDrop, ShowCard, Task} from '@/views/kamatcher/models'
import * as _ from 'lodash'
import {numberToPath} from '@/common/cards'

const currentRoute = router.currentRoute.value
const {cards, level, woman, man} = parseIntParams(
  currentRoute.params,
  ['cards', 'level', 'woman', 'man']
)
let {w: womanClothes, m: manClothes, c: taskCard} = parseIntParams(currentRoute.query, ['w', 'm', 'c'])
const clothesTask: {[key in Gender]: boolean} = {
  [Gender.Woman]: false,
  [Gender.Man]: false,
}
if (woman === taskCard) clothesTask[Gender.Woman] = (--womanClothes >= 0)
if (man === taskCard) clothesTask[Gender.Man] = (--manClothes >= 0)
const someHasClothes = (womanClothes + manClothes) > 0

const createTask = (clothes: ClothesToDrop, gender: Gender, hasClothes: boolean): Task => {
  if (gender < 0) return createCombinedTask(clothesTask, hasClothes)
  return createSingleTask(gender, clothesTask[gender])
}

const choiceResults = [[Gender.Woman, woman], [Gender.Man, man]].filter(_.constant(woman !== man))
const sameResults = choiceResults.length === 0

const pages = ref(
  (choiceResults.length ? choiceResults : [[-1 as Gender, woman]])
    .map(([gender, card]) => ({
      card,
      gender,
      task: createTask(clothesTask, gender, someHasClothes),
    } as ShowCard))
)
</script>

<template>
  <main class="uk-overflow-auto" id="kamarafon">
    <div class="uk-height-1-1 uk-child-width-1-2@s uk-flex-middle uk-flex-center"
         :class="`uk-child-width-1-${pages.length}@m`"
         uk-grid>

      <div v-for="card in pages" class="uk-flex uk-flex-center">
        <div class="uk-inline" uk-lightbox>
          <a :href="numberToPath(card.card)">
            <img :src="numberToPath(card.card)" :alt="card.task"/>
          </a>
          <div class="uk-overlay uk-padding-small uk-position-top">
            <div class="uk-align-right">
              <router-link
                v-if="someHasClothes || !sameResults"
                :to="{name: 'kamatcher-choice', params: {level: level + 1, cards}, query: {w: womanClothes, m: manClothes}}">

                <span uk-icon="chevron-double-right" ratio="1.2"></span>
              </router-link>
              <router-link
                v-else
                :to="{name: 'kamatcher-main'}">
                <span uk-icon="refresh" ratio="1.2"></span>
              </router-link>
            </div>
            <span class="uk-label" :class="{'uk-label-danger': Gender.Woman === card.gender}">
              {{ card.task.title }}
            </span>
            <ul class="uk-list uk-list-collapse uk-list-hyphen">
              <li v-for="desc in card.task.description">
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/utils.styl"
#kamarafon
  img
    max-height 100dvh

  .uk-overlay
    background transparent-background()
    color white
</style>
