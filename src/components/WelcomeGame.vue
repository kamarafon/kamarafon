<template>
  <div class="welcome-game uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
    <div class="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-width-1-1@s">
      <div class="game-title">
        <slot name="title"></slot>
      </div>

      <slot name="description"></slot>
    </div>
  </div>
</template>
