<script setup lang="ts">
import {RouterView} from 'vue-router'

const fullScreen = (element: HTMLElement): boolean => {
  element.requestFullscreen && element.requestFullscreen()
  return true
}
</script>

<template>
  <div class="uk-container uk-height-1-1 uk-overflow-hidden">
    <router-view v-slot="{Component, route}" class="page">
      <transition>
        <component :is="Component" :key="route.fullPath"></component>
      </transition>
    </router-View>
  </div>
</template>

<style src="uikit/dist/css/uikit.min.css"></style>
<style src="../node_modules/animate.css"></style>

<style lang="stylus">
@import "assets/colors.styl"
@import "assets/utils.styl"
@import "assets/metrics.styl"

@font-face
  font-family: 'Alumni Sans Pinstripe';
  src: url('/fonts/AlumniSansPinstripe-Regular.woff2') format('woff2'),
    url('/fonts/AlumniSansPinstripe-Regular.woff') format('woff'),
    url('/fonts/AlumniSansPinstripe-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;

.animated
  position absolute
  top 0
  bottom 0
  left 0
  right 0

//.animate__animated.animate__bounceInLeft
//  --animate-duration: 1s
//  --animate-delay: 1s
//
//.animate__animated.animate__bounceOutRight
//  --animate-duration: 1s

//:root {
//  --animate-duration: 800ms;
//  --animate-delay: 0.9s;
//}

body
  scrollbar-gutter stable
  background transparent-background(), url("/pages/365_dney_seksa-370.jpg") center
  background-color $color-primary-1
  background-size fill
  background-repeat no-repeat
  height 100dvh

#app
  height 100%

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
  transition all .3s ease
  transition-delay .3s
  opacity 0
.v-enter-to
  opacity 1

.v-leave-active
  opacity 1
  transition all .3s ease
.v-leave-to
  opacity 0

</style>
