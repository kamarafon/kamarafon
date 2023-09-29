<script lang="ts" setup>
import {cardCategories, numberToPath} from '@/common/cards'
import * as _ from 'lodash'
</script>

<template>
  <main>
    <div class="kamategories">
      <div class="category" v-for="(category, key) in cardCategories">
        <div class="category-title">{{category.title}}</div>
        <div class="images">
          <div class="single-image" v-for="id in _.take(category.ids, 4)"><img :src="numberToPath(id)" alt=""/></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
.kamategories
  height 100dvh
  scroll-snap-type y mandatory
  overflow-y scroll
  width 100%

  .category
    display flex
    flex-direction column
    scroll-snap-align start
    height 100dvh

    &-title
      height 2em

    .images
      display flex
      flex-basis 50%
      flex-wrap wrap
      height (100% - 2em)

      .single-image
        display flex
        justify-content center
        align-items center
        flex-basis 50%
        flex-grow 1
        height 50%

        img
          display inline-block
          max-width 100%
          max-height 100%
</style>
