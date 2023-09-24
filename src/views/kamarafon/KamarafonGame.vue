<script setup lang="ts">
import {onBeforeUnmount, onMounted} from 'vue'
import router from '@/router'
import {useKamarafonStore} from '@/stores/kamarafon'
import {numberToPath} from '@/common/cards'

const store = useKamarafonStore()
const level = +router.currentRoute.value.params.level
const image = numberToPath(store.cardIds[level])
const nextLevel = () => router.push({name: 'kamarafon-game', params: {level: level + 1}})

const keyPressHandler = (e: KeyboardEvent) => {
  if (e.code !== 'Space') return
  nextLevel()
}

const clickListener = (__: MouseEvent) => nextLevel()

onMounted(() => document.addEventListener('keypress', keyPressHandler))
onBeforeUnmount(() => document.removeEventListener('keypress', keyPressHandler))
</script>

<template>
  <main @click="clickListener">
    <img :src="image" alt="" class="pose"/>
    <div class="hud">
      # {{ level + 1 }}
    </div>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"

main
  display flex
  height 100%

  .pose
    max-height 100%
    max-width 100%

.hud
  color $color-primary-3
  font-size 1.4em
  position fixed
  top 0
  left 0
  padding .5em .8em

</style>
