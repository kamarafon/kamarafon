<script setup lang="ts">
import {numberToPath} from '@/common/cards'
import {ref} from 'vue'
import {Gender} from '@/common/gender'
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
  <div class="cards" :style="{'--cards-count': page.length}">
    <div v-for="card in page" class="card">
      <a href="#" @click.prevent="emit('select', card.card)">
        <img alt="card"
             :src="numberToPath(card.card)"
             :class="'highlight-gender-' + (Gender[card.gender!] || 'combined')"/>
        <transition>
          <div class="task" v-if="card.showTask">
            <div>
              <slot name="card-task" :card="card"></slot>
            </div>
          </div>
        </transition>
      </a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import "../../assets/colors.styl"
@import "../../assets/utils.styl"
@import "../../assets/metrics.styl"

highlight(color)
  gender-highlight(color, 0 0 1em, "")

.cards
  display flex
  width 100%
  height 100%
  align-items center
  justify-content center

  .card
    position relative
    display flex
    margin .5em
    flex-grow 1
    height 100%
    justify-content center
    align-items center

    a
      height 100%
      display flex
      align-items center
      position relative

      img
        display inline-block
        max-width 100%
        max-height 100%

        &.highlight-gender-Man
          highlight($color-he)

        &.highlight-gender-Woman
          highlight($color-she)

        &.highlight-gender-combined
          highlight(gold)

    .task
      display flex
      top 0
      bottom 0
      left 0
      right 0
      align-items center
      position absolute
      justify-content center
      background transparent-background()

@media (orientation: portrait)
  .cards
    flex-direction column
    height calc(100% / var(--cards-count))
</style>
