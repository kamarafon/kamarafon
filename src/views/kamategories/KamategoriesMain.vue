<script setup lang="ts">
import {CategoryTag, categoryIdsByName, cardCategories, numberToPath} from '@/common/cards'
import {ref} from 'vue'
import * as _ from 'lodash'

const selectedCategory = ref(_.first(cardCategories)!)
const selectedTag = ref(_.first(_.values(CategoryTag))!)

</script>

<template>
  <div class="uk-flex uk-flex-column">
    <div class="uk-width-1-1">
      <ul class="uk-flex-center" uk-tab>
        <li v-for="title in CategoryTag">
          <a href="#" @click="selectedTag = title">{{ title }}</a>
        </li>
      </ul>
    </div>

    <template v-for="scope in [{ids: categoryIdsByName(selectedCategory, selectedTag)}]">
      <div v-if="!scope.ids.length" class="uk-flex uk-height-1-1 uk-flex-middle uk-flex-center">
        <span class="uk-label uk-text-uppercase">ой, ничего нет</span>
      </div>
      <div uk-grid
           v-else
           class="uk-child-width-1-2 uk-child-width-1-6@l uk-child-width-1-4@m uk-overflow-auto uk-height-1-1"
           uk-lightbox="animation: slide">

        <transition-group>
          <div v-for="id in scope.ids" :key="id">
            <a :href="numberToPath(id)">
              <img :src="numberToPath(id)"/>
            </a>
          </div>
        </transition-group>
      </div>
    </template>

    <div class="uk-width-1-1">
      <ul class="uk-flex-center" uk-tab>
        <li class="uk-active" v-for="category in cardCategories">
          <a href="#" @click="selectedCategory = category">{{ category.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
