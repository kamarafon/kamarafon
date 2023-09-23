<script setup lang="ts">
import {RouterLink} from 'vue-router'
import {useStore} from '@/stores/store';

const store = useStore()
const startGame = () => {
  store.generateImageIndexes()
}
</script>

<template>
  <main>
    <header>Камарафон</header>
    <div class="description">
      <p>
        В этой игре вам показывают случайную эротическую позу, которую вы должны повторить со своим партнёром.
        Количество ласк или проникноверний зависит от уровня
      </p>
      <ul>
        <li>На первом уровне, один раз</li>
        <li>На втором уровне, два</li>
        <li>и т.д.</li>
      </ul>
      <p>
        Игра продалжается до конца ...
      </p>

      <p class="run-button">
        <RouterLink :to="{name: 'game', params: {level: 0}}"
                    @click="startGame()"
                    class="button">
          Начать
        </RouterLink>
      </p>
    </div>
  </main>
</template>

<style lang="stylus">
@import "../assets/colors.styl"

header
  font-size 8em
  text-shadow 0 0 .09em $color-primary-0

main
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

  header
    font-family Aventador

  .description
    background rgba($color-secondary-a-0, .5)
    padding 1em 2em
    margin 2em 0
    width 40%
    font-size 1.1em
    color $color-primary-3

    ul
      padding 0 2em

    p
      margin 1em 0

    .run-button
      text-align center
      margin 4em 0
</style>
