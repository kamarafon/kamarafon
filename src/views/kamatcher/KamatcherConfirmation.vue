<script setup lang="ts">
import type {Card} from '@/views/kamatcher/models'
import {defineProps, defineEmits, onMounted, onUnmounted} from 'vue'

const {card} = defineProps<{
  card: Card
}>()

const emit = defineEmits<{
  (e: 'confirmed', card: Card): void,
  (e: 'reject'): void
}>()

const handleKeys = (event: KeyboardEvent) => {
  switch (event.code.toLowerCase()) {
    case "escape":
      emit('reject')
      break
    case "enter":
      emit('confirmed', card)
      break
  }
}

onMounted(() => document.addEventListener('keydown', handleKeys))
onUnmounted(() => document.removeEventListener('keydown', handleKeys))

</script>

<template>
  <div class="confirm-card">
    <img alt="card" :src="card.path"/>
    <div class="confirmation">
      <button @click="emit('confirmed', card)">выбрать</button>
      <button @click="emit('reject')">отмена</button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.confirm-card
  display flex
  justify-content center
  align-items center
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background rgba(0, 0, 0, .9)

  img
    max-height 100%
    max-width 100%
    margin 0 auto
    display block

  .confirmation
    position absolute
    bottom 0
    width 100%
    text-align center

    button
      padding .5em
      margin .5em
</style>