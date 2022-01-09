<template>
  <div>
    <Hero />

    <section>
      <Pagination
        :prev="pokemons.previous"
        :next="pokemons.next"
        @handle-pagination="paginationPokemons"
      />

      <div
        v-if="$fetchState.pending"
        class="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:px-28"
      >
        <Skeleton height="h-80" corner="rounded-xl" />
        <Skeleton height="h-80" corner="rounded-xl" />
        <Skeleton height="h-80" corner="rounded-xl" />
      </div>
      <div
        v-else
        class="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:px-28"
      >
        <Card
          v-for="(item, index) in pokemons.results"
          :key="index"
          :title="item.name"
          :url="item.url"
          :img="item.img"
          @poke-detail="goToPokeDetail"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  defineComponent,
  useContext,
  useFetch,
  computed,
} from '@nuxtjs/composition-api'
import Skeleton from '~/components/Skeleton.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { Skeleton },
  fetchOnServer: false,
  setup() {
    const { store } = useContext()

    useFetch(async () => {
      await store.dispatch('fetchPokemons')
    })

    const pokemons = computed(() => store.state.pokemons)

    const paginationPokemons = (url: string): void => {
      store.dispatch('fetchPokemons', url)
    }

    const goToPokeDetail = (url: string): void => {
      console.log(url)
    }

    return {
      pokemons,
      paginationPokemons,
      goToPokeDetail,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
