<script setup lang="ts">
import {numberToPath} from '@/common/cards'
import {ref} from 'vue'
import type {ShowCard} from '@/views/kamatcher/models'

const props = defineProps<{
  page: ShowCard[]
}>()

const emit = defineEmits<{
  (e: 'select', card: number): void
}>()

const page = ref(props.page)
</script>

<template>
  <main class="uk-flex uk-flex-column uk-height-1-1">
    <div class="uk-position-relative uk-visible-toggle uk-light uk-height-1-1" tabindex="-1" uk-slider>
      <ul
        class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-height-1-1 uk-flex uk-flex-center">
        <li v-for="card in page"
            class="uk-width-1-4@l uk-width-1-3@m uk-width-1-2@s uk-height-1-1 uk-flex uk-flex-middle uk-flex-center">
          <div class="uk-position-relative">
            <img :src="numberToPath(card.card)" width="" height="" alt="">
            <div class="uk-position-absolute uk-position-bottom uk-margin-bottom uk-margin-left">
              <a href="" class="uk-icon-button" uk-icon="push" @click.prevent="emit('select', card.card)"></a>
            </div>
          </div>
        </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="" uk-slidenav-previous
         uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="" uk-slidenav-next
         uk-slider-item="next"></a>
    </div>

  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"
@import "../../assets/utils.styl"
@import "../../assets/metrics.styl"

img
  max-height 100%
</style>
