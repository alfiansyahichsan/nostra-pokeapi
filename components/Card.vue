<template>
  <nuxt-link :to="`/pokemon/${data.id}`">
    <div class="card">
      <div class="img">
        <img :src="data.img" :alt="data.name" />
      </div>
      <div class="content">
        <h1>{{ data.name }}</h1>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseCard',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="postcss" scoped>
.card {
  @apply max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500;

  .img {
    @apply p-4 sm:h-52 xl:h-96;
    img {
      @apply rounded-xl;
    }
  }

  .content {
    @apply flex justify-between p-6 items-center mx-auto;

    h1 {
      @apply text-lg text-gray-900 font-bold mx-auto;
    }
  }
}
</style>
