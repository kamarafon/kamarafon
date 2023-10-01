<script lang="ts" setup>
import router from '@/router'
import {cardCategories, numberToPath} from '@/common/cards'

const currentRoute = router.currentRoute.value
const categoryName = currentRoute.params.category
const page = +currentRoute.query.page || 0
const count = 24
const category = cardCategories[categoryName]
const categoryIds = category.ids
const offset = page * count
const ids = categoryIds.slice(offset, offset + count)
const totalPages = Math.ceil(categoryIds.length / count)
</script>

<template>
  <main class="uk-overflow-auto" id="show-category">
    <div class="category-menu uk-flex uk-flex-middle" uk-sticky>
      <div class="uk-width-1-1 uk-flex uk-flex-middle uk-flex-between">
        <div class="uk-label">
          <router-link :to="{name: 'kamategories-main'}">
            {{ category.title }}
          </router-link>
        </div>
        <ul class="uk-pagination">
          <li v-if="page">
            <router-link :to="{name: 'kamategories-show', params: {category: categoryName}, query: {page: page - 1}}">
              <span uk-pagination-previous></span>
            </router-link>
          </li>
          <li class="uk-disabled">
            <a href="">{{ page + 1 }} / {{ totalPages }}</a>
          </li>
          <li v-if="page + 1 < totalPages">
            <router-link :to="{name: 'kamategories-show', params: {category: categoryName}, query: {page: page + 1}}">
              <span uk-pagination-next></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div uk-grid
         uk-lightbox
         class="uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-4@m uk-child-width-1-6@l uk-grid-collapse">

      <div v-for="id in ids">
        <a :href="numberToPath(id)">
          <img :src="numberToPath(id)" :alt="id"/>
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../assets/utils.styl"
@import "../../assets/colors.styl"

#show-category
  .category-menu
    background transparent-background()

  .uk-disabled
    a
      color $color-primary-0
</style>
