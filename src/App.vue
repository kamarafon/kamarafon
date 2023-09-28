<script setup lang="ts">
import {RouterView} from 'vue-router'

const fullScreen = (element: HTMLElement): boolean => {
  element.requestFullscreen && element.requestFullscreen()
  return true
}
</script>

<template>
  <router-view v-slot="{Component, route}" class="page">
    <transition>
      <component :is="Component" :key="route.fullPath"></component>
    </transition>
  </router-View>
  <div class="menu">
    <router-link to="/" class="button">↩</router-link>
  </div>
</template>

<style lang="stylus">
@import "assets/colors.styl"
@import "assets/utils.styl"

@font-face {
  font-family: 'Alumni Sans Pinstripe';
  src: url('/fonts/AlumniSansPinstripe-Regular.woff2') format('woff2'),
    url('/fonts/AlumniSansPinstripe-Regular.woff') format('woff'),
    url('/fonts/AlumniSansPinstripe-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

html
  font-size 20px
  font-weight bolder

@media screen and (max-width: 600px)
  html
    font-size 12px

*
  margin 0
  padding 0
  font-family "Alumni Sans Pinstripe", Tahoma, Geneva, sans-serif

body
  scrollbar-gutter stable
  background transparent-background(), url("/pages/365_dney_seksa-370.jpg") center
  background-color $color-primary-1
  background-size fill
  background-repeat no-repeat
  height 100dvh
  color $color-primary-0

#app
  height 100%

  & > .page
    display flex
    justify-content center
    align-items center
    width 100%
    height 100%

button, .button
  border .1em solid $color-primary-0
  font-weight normal
  color $color-primary-3
  padding 1em 2em
  font-size 1.2em
  cursor pointer
  text-transform uppercase
  text-decoration none
  transition all ease .3s
  background transparent-background()
  border-radius .3em

  &:hover
    box-shadow 0 0 .5em $color-primary-0

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
    opacity .5

    &.router-link-active
      display none
</style>
