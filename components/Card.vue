<template>
  <div class="card" @click="$emit('poke-detail', url)">
    <div class="img">
      <img class="rounded-xl" :src="img" alt="Dog" />
    </div>
    <div class="content">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CardPoke',
  props: {
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="postcss" scoped>
.card {
  @apply max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500;

  .img {
    @apply p-4;
  }

  .content {
    @apply flex justify-between p-6 items-center mx-auto;

    h1 {
      @apply text-lg text-gray-900 font-bold mx-auto;
    }
  }
}
</style>
