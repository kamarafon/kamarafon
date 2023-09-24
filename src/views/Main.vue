<script lang="ts" setup>
import router from '@/router';

const games = [
  {
    title: 'kamarafon',
    subtitle: 'шаг, за шагом',
    path: router.resolve({name: 'kamarafon-main'})
  },
  {
    title: 'kamatcher',
    subtitle: 'совпадение, не думаю',
    path: router.resolve({name: 'kamatcher-main'})
  },
  {
    title: 'just dance',
    subtitle: 'сделаем это быстро',
    path: '/',
  }
]
</script>

<template>
  <main>
    <ul class="game-selector">
      <li v-for="game in games">
        <router-link :to="game.path">
          {{ game.title }}
          <span class="sub-title">{{ game.subtitle }}</span>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<style lang="stylus">
@import '../assets/colors.styl'
@import "../assets/utils.styl"

.game-selector
  background transparent-background()
  padding 1em
  font-size 1.5em
  text-transform uppercase
  list-style none
  min-width 50%

  li
    margin 1em 0
    text-align center

    a
      text-decoration none
      color $color-primary-4

      .sub-title
        display block
        font-size .5em
        color $color-secondary-b-0
        text-transform lowercase
</style>