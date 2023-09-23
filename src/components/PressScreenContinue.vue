<script setup lang="ts">
import router from '@/router'

const props = defineProps<{
  path: string
  before: () => void
}>()
const goTo = (path: string) => {
  props.before()
  router.push(path)
}
</script>

<template>
  <div class="press-screen" @click="goTo(path)">
    <div class="press-screen-content">
      <slot></slot>
    </div>
    <div class="press-screen-label">
      <span>
        коснитесь экрана для продолжения
      </span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import "../assets/colors.styl"

@keyframes blink
  0%
    opacity 1
  50%
    opacity 0
  100%
    opacity 1

.press-screen
  width 100%
  height 100%
  display flex
  flex-direction column

  &-content
    height 100%

  &-label
    width 100%
    text-align center
    margin-bottom 1em
    font-size 1.4em

    span
      cursor pointer
      animation blink 3s ease-in-out infinite

</style>