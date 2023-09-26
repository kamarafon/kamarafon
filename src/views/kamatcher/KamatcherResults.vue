<script setup lang="ts">
import router from '@/router'
import {parseIntParams} from '@/common/extensions'
import {useKamatcherStore} from '@/stores/kamatcher'
import {Gender} from '@/common/gender'
import KamatcherShowCards from '@/views/kamatcher/KamatcherShowCards.vue'
import {ref} from 'vue'
import * as _ from 'lodash'
import {ClothesByGender, createCombinedTask, createSingleTask, Task} from '@/views/kamatcher/tasks-generator'

const currentRoute = router.currentRoute.value
const {cards, level, woman, man} = parseIntParams(
  currentRoute.params,
  ['cards', 'level', 'woman', 'man']
)
let {w: womanClothes, m: manClothes, c: taskCard} = parseIntParams(currentRoute.query, ['w', 'm', 'c'])
const clothesTask: ClothesByGender = {}
if (woman === taskCard) clothesTask[Gender.Woman] = --womanClothes
if (man === taskCard) clothesTask[Gender.Man] = --manClothes
const someHasClothes = womanClothes > 0 || manClothes > 0

const createTask = (clothes: ClothesByGender, gender: Gender, hasClothes: boolean): Task => {
  if (gender < 0) return createCombinedTask(clothesTask, hasClothes)
  return createSingleTask(clothesTask, gender)
}

const pages = ref(
  [[Gender.Woman, woman], [Gender.Man, man]]
    .reduce((w, m) => {
      if (man === woman) return [[-1, woman]]
      return [w, m]
    })
    .map(([gender, card]) => ({
      card,
      gender,
      showTask: false,
      task: createTask(clothesTask, gender, someHasClothes),
    }))
)

const toggleShowTask = () => pages.value.forEach(p => p.showTask = !p.showTask)
</script>

<template>
  <main>
    <kamatcher-show-cards :page="pages" class="pages" @select="toggleShowTask()">
      <template #card-task="{card}">
        <div class="task-description" v-if="card.task">
          <div class="title">
            {{ card.task.title }}
          </div>
          <div class="description" v-for="desc in card.task.description">
            {{ desc }}
          </div>
          <div class="next-button">
            <router-link :to="{name: 'kamatcher-choice', params: {level: level + 1, cards}, query: {w: womanClothes, m: manClothes}}"
                         v-if="someHasClothes"
                         class="button">
              продолжить
            </router-link>
            <router-link :to="{name: 'kamatcher-main'}"
                         v-else
                         class="button">
              сыграть ещё
            </router-link>
          </div>
        </div>
      </template>
    </kamatcher-show-cards>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"

.task-description
  text-align center
  .title
    font-size 1.6em
    color $color-primary-3

  .description
    color $color-secondary-b-0
    font-size 1.2em

  .next-button
    margin-top 3em
    text-align center
</style>
