<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'
import router from '@/router'
import {useKamarafonStore} from '@/stores/kamarafon'
import {numberToPath} from '@/common/cards'
import uk from 'uikit'
import UIkit from 'uikit'
import UIkitModalElement = UIkit.UIkitModalElement

const store = useKamarafonStore()
const level = +router.currentRoute.value.params.level
const image = numberToPath(store.cardIds[level])
const modal = ref({} as UIkitModalElement & HTMLElement)
const showModal = () => uk.modal(modal.value).show()
const nextLevel = () => {
  const nextLevel = level + 1
  if (store.cardIds[nextLevel]) return router.push({name: 'kamarafon-game', params: {level: nextLevel}})
  showModal()
}

const keyPressHandler = (e: KeyboardEvent) => {
  if (e.code !== 'Space') return
  nextLevel()
}

onBeforeUnmount(() => modal.value.parentElement!.removeChild(modal.value))

const clickListener = (__: MouseEvent) => nextLevel()

onMounted(() => document.addEventListener('keypress', keyPressHandler))
onBeforeUnmount(() => document.removeEventListener('keypress', keyPressHandler))
</script>

<template>
  <main @click="clickListener" class="uk-flex uk-height-1-1 uk-flex-center uk-flex-middle">
    <img :src="image" alt="" class="pose"/>
    <div
      class="uk-label uk-label-danger uk-position-absolute uk-position-top-left uk-margin-left uk-margin-top uk-text-bold">
      # {{ level + 1 }}
    </div>
    <div id="modal-full" class="uk-modal-full" uk-modal ref="modal">
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
          <div class="uk-padding-large">
            <h1>Конец</h1>
            <p>
              К сожалению позы закончились, попробуйте сыграть
              <router-link :to="{name: 'kamarafon-main'}">
                ещё раз
              </router-link>
            </p>
          </div>
          <div class="uk-background-cover" :style="{'background-image': `url(${image})`}" uk-height-viewport></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"

.pose
  max-height 100%

</style>
