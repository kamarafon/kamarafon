<script setup lang="ts">
import {RouterView} from 'vue-router'

const fullScreen = (element: HTMLElement): boolean => {
  element.requestFullscreen && element.requestFullscreen()
  return true
}
</script>

<template>
  <div class="uk-container uk-height-1-1">
    <router-view v-slot="{Component, route}" class="page">
      <transition>
        <component :is="Component" :key="route.fullPath"></component>
      </transition>
    </router-View>
  </div>
</template>

<style src="uikit/dist/css/uikit.min.css"></style>

<style lang="stylus">
@import "assets/colors.styl"
@import "assets/utils.styl"
@import "assets/metrics.styl"

@font-face {
  font-family: 'Alumni Sans Pinstripe';
  src: url('/fonts/AlumniSansPinstripe-Regular.woff2') format('woff2'),
    url('/fonts/AlumniSansPinstripe-Regular.woff') format('woff'),
    url('/fonts/AlumniSansPinstripe-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body
  scrollbar-gutter stable
  background transparent-background(), url("/pages/365_dney_seksa-370.jpg") center
  background-color $color-primary-1
  background-size fill
  background-repeat no-repeat
  height 100dvh
  color $color-primary-0

#app
  height 100dvh

  & .uk-container > .page
    height 100%

  a
    color $color-primary-3
    text-decoration none

  .game-title
    font-family "Alumni Sans Pinstripe"
    font-size 3em
    text-transform uppercase
    line-height 1

.uk-card-secondary
  background transparent-background()

.v-enter-active
  transition all 1s ease
  transform scale(1)

.v-leave-active
  position absolute
  transition all 1s ease
  transform scale(1)

.v-enter-from
  opacity 0
  transform scale(.6)

.v-leave-to
  opacity 0
  transform scale(.6)
</style>
