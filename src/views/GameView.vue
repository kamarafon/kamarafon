<script setup lang="ts">
import {onBeforeUnmount, onMounted} from 'vue'
import {useStore} from "@/stores/store"
import router from "@/router/index"
import * as _ from 'lodash'

const store = useStore()
const level = +router.currentRoute.value.params.level
const currentImage = store.imageIndexes[level];
const image = `/pages/365_dney_seksa-${_.padStart(currentImage, 3, '0')}.jpg`
const nextLevel = () => router.push({name: 'game', params: {level: level + 1}})

const keyPressHandler = (e: KeyboardEvent) => {
  if (e.code !== 'Space') return
  nextLevel()
}

const clickListener = (e: MouseEvent) => nextLevel()

onMounted(() => document.addEventListener('keypress', keyPressHandler))
onBeforeUnmount(() => document.removeEventListener('keypress', keyPressHandler))
</script>

<template>
  <main @click="clickListener">
    <img :src="image" alt="" class="pose"/>
    <div class="hud">
      #{{ level + 1 }}
    </div>
  </main>
</template>

<style lang="stylus" scoped>
@import "../assets/colors.styl"

main
  display flex
  height 100%

  .pose
    max-height 100%
    max-width 100%

.hud
  color $color-secondary-b-0
  font-family Aventador
  font-size 2em
  position fixed
  top 0
  left 0
  padding 1.2em

</style>
