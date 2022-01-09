<template>
  <div>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>

<style lang="postcss" scoped>
div {
  @apply container mx-auto px-4 sm:px-0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
