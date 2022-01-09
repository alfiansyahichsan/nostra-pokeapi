<template>
  <section>
    <div>
      <h2>Poke API</h2>
      <h1>Explore Pokemon</h1>
      <p>
        Nuxt js + Typescript + Composition API + Tailwindcss + PostCSS + Poke
        API
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HeroSection',
})
</script>

<style lang="postcss" scoped>
section {
  @apply text-gray-700 bg-white mt-12 sm:mt-20 container flex flex-col items-center mx-auto md:flex-row sm:px-28 w-full;

  div {
    @apply flex flex-col items-start sm:mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0;
  }

  h2 {
    @apply mb-4 text-xs font-semibold tracking-widest text-black uppercase;
  }

  h1 {
    @apply mb-4 text-2xl font-black tracking-tighter text-black md:text-5xl;
  }

  p {
    @apply mb-8 text-base leading-relaxed text-left text-gray-600;
  }
}
</style>
