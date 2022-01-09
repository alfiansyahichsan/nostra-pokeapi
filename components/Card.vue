<template>
  <div class="card" @click="$emit('poke-detail', url)">
    <div class="img">
      <img
        class="rounded-xl"
        src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="Dog"
      />
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
