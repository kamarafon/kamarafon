<script setup lang="ts">
import {cardCategories, numberToPath} from '@/common/cards'
import {ref} from 'vue'
import * as _ from 'lodash'

const forms = ref(["", ""] as string[])
const images = ref([] as number[])
const combine = () => {

  const [ids1, ids2] = forms.value
    .filter(_.identity)
    .map(name => cardCategories[name].ids)
  images.value = _.intersection(ids1, ids2)
}

</script>

<template>
  <main class="uk-overflow-auto">
    <h2>Пересечение категорий</h2>

    {{ images.map(n => n - 3) }} - {{ images.length }}

    <div class="uk-child-width-1-2" uk-grid>
      <div v-for="(__, index) in 2">
        <ul class="uk-list uk-list-collapse">
          <li v-for="(category, key) in cardCategories">
            <label>
              <input type="radio"
                     :name="index"
                     class="uk-radio uk-margin-right"
                     v-model="forms[index]"
                     @change="combine()"
                     :value="key"/>
              {{ category.title }}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="uk-child-width-1-4" uk-grid>
      <div v-for="image in images">
        <div uk-lightbox>
          <a :href="numberToPath(image)">
            <img :src="numberToPath(image)">
          </a>
        </div>
      </div>
    </div>

  </main>
</template>