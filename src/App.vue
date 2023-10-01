<script setup lang="ts">
import {RouterView} from 'vue-router'

</script>

<template>
  <div class="uk-container uk-container-expand uk-height-1-1 uk-overflow-hidden">
    <router-view v-slot="{Component, route}" class="page">
      <transition>
        <component :is="Component" :key="route.fullPath"></component>
      </transition>
    </router-View>
    <div class="uk-position-absolute uk-position-bottom-right uk-margin-right uk-margin-bottom" id="main-menu">
      <router-link :to="{name: 'main'}">
        <span uk-icon="home"></span>
      </router-link>
    </div>
  </div>
</template>

<style src="uikit/dist/css/uikit.min.css"></style>

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

#main-menu
  .router-link-active
    display none

</style>
