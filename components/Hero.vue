<template>
  <section class="text-blueGray-700 bg-white mt-12 sm:mt-20">
    <div
      class="container flex flex-col items-center mx-auto md:flex-row sm:px-40"
    >
      <div
        class="flex flex-col items-start sm:mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0"
      >
        <h2
          class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"
        >
          Poke API
        </h2>
        <h1
          class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"
        >
          Explore Pokemon
        </h1>
        <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600">
          Nuxt js + Typescript + Tailwindcss + Poke API
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HeroSection',
})
</script>
