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
    title: 'kamategories',
    subtitle: 'всё по полочкам',
    path: '/kamategories',
  }
]
</script>

<template>
  <main class="uk-flex uk-flex-middle uk-flex-center">
    <div class="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-width-1-1@s">
      <dl v-for="game in games">
        <dt><router-link :to="game.path" class="uk-text-large game-title">{{ game.title }}</router-link></dt>
        <dd class="uk-text-meta">{{ game.subtitle }}</dd>
      </dl>
    </div>
  </main>
</template>

<style lang="stylus">
@import '../assets/colors.styl'
@import "../assets/utils.styl"
</style>