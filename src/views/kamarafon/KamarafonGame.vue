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
  <main @click="clickListener" class="uk-flex uk-height-1-1 uk-flex-center uk-flex-middle">
    <img :src="image" alt="" class="pose"/>
    <div class="uk-label uk-label-danger uk-position-absolute uk-position-top-left uk-margin-left uk-margin-top uk-text-bold">
      # {{ level + 1 }}
    </div>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"

.pose
  max-height 100%

</style>
