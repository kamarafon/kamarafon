<script setup lang="ts">
import WelcomeGame from '@/components/WelcomeGame.vue'
import PressScreenContinue from "@/components/PressScreenContinue.vue";
import router from '@/router'
import {useKamarafonStore} from '@/stores/kamarafon'

const store = useKamarafonStore()

const prepareGame = () => store.prepareGame()

</script>

<template>
  <main>
    <press-screen-continue :path="router.resolve({name: 'kamarafon-game', params: {level: 0}}).path"
                           :before="prepareGame">
      <welcome-game>
        <template v-slot:title>kamarafon</template>
        <template v-slot:description>
            <p>В этой игре вам предстоит испытать каждую поза "в деле"</p>
            <p>
              Партнёр, на каждом уровне, должен проникать в партнёршу, определённое количество раз, соответствующее номеру
              уровня,
              в указанной на изображении позе:
            </p>
            <ul class="uk-list uk-list-collapse uk-list-hyphen">
              <li>на первом уровне, он входит в партнёршу - один раз</li>
              <li>на втором, два раза</li>
              <li>и так далее, пока не закончит акт</li>
            </ul>
            <p>
              Если поза подразумевает аральные ласки, значит необходимо, точно также выполнить их соответствующее
              количество
            </p>
        </template>
      </welcome-game>
    </press-screen-continue>
  </main>
</template>
