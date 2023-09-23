<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="menu">
    <router-link :to="{name: 'home'}" class="button">↩</router-link>
  </div>
  <router-view v-slot="{Component, route}" class="page">
    <transition>
      <component :is="Component" :key="route.fullPath"></component>
    </transition>
  </router-View>
</template>

<style lang="stylus">
@import "assets/colors.styl"

@font-face
  font-family: Aventador
  src: url('/fonts/Aventadorscript.woff2') format('woff2'),
    url('/fonts/Aventadorscript.woff') format('woff'),
    url('/fonts/Aventadorscript.ttf') format('truetype')
  font-weight: normal
  font-style: normal
  font-display: swap


html
  font-size 16px

*
  margin 0
  padding 0
  font-family Tahoma, Geneva, sans-serif

body
  overflow hidden
  background linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 1)), url("/pages/365_dney_seksa-370.jpg") center
  background-color $color-primary-1
  background-size fill
  background-repeat no-repeat
  height 100vh
  color $color-primary-0

#app
  height 100%

  & > .page
    width 100%
    height 100%

button, .button
  font-weight normal
  border .05em solid $color-secondary-b-0
  color $color-secondary-b-3
  padding 1em 2em
  font-size 1.2em
  cursor pointer
  text-transform uppercase
  text-decoration none
  transition all ease .3s

  &:hover
    box-shadow 0 0 .5em $color-primary-4

.v-enter-active
  position absolute
  transition all 1.5s ease
  transform scale(1)

.v-leave-active
  position absolute
  transition all 1.5s ease
  transform scale(1)

.v-enter-from
  opacity 0
  transform scale(.1)

.v-leave-to
  opacity 0
  transform scale(.1)

.menu
  size = 2em
  position fixed
  top 1em
  right 1em
  font-size 1em
  width size
  height size

  a
    width 100%
    height 100%
    display inline-flex
    justify-content center
    align-items center
    padding 0
    border-radius 50%
    background none

    &.router-link-active
      display none
</style>
