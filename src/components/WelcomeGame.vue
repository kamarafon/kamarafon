<template>
  <div class="uk-flex uk-height-1-1">
    <div class="uk-card uk-card-body uk-width-1-1">
      <div class="game-title">
        <slot name="title"></slot>
      </div>

      <slot name="description"></slot>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
*
  color white
</style>
