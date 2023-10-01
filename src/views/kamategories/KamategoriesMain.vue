<script lang="ts" setup>
import {cardCategories, numberToPath} from '@/common/cards'
import * as _ from 'lodash'
</script>

<template>
  <main class="uk-overflow-auto">
    <div v-for="(category, key) in cardCategories" class="uk-margin-top">
      <div>
        <router-link :to="{name: 'kamategories-show', params: {category: key}}">
          <span class="uk-label uk-label-danger">{{ category.title }}</span>
        </router-link>
      </div>
      <div uk-slider>
        <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m">
          <li v-for="card in _.take(category.ids, 4)">
            <img :src="numberToPath(card)" alt="">
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
</style>
