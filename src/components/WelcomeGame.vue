<template>
  <div class="welcome-game">
    <h2>
      <slot name="title"></slot>
    </h2>

    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style lang="stylus">
@import "../assets/colors.styl"
@import "../assets/utils.styl"

.welcome-game
  width 100%
  height 100%
  margin 1em
  display flex
  flex-direction column
  padding 1em
  justify-content center
  align-items center

  h2
    width 100%
    text-transform uppercase
    text-shadow 0 0 .05em white
    color $color-primary-2
    font-size 4em
    max-width 960px

  .description
    background transparent-background()
    color $color-primary-3
    padding 1em 2em
    max-width 960px
    width 100%

    p
      margin .5em 0

    ul
      list-style none
      color $color-secondary-b-0
</style>
