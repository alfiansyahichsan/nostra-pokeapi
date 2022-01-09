<template>
  <div>
    <Hero />

    <section>
      <div class="mx-auto sm:px-28">
        <div class="flex flex-row items-center justify-between pb-4">
          <Select />

          <Pagination
            :prev="previous"
            :next="next"
            @handle-pagination="paginationPokemons"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <template v-if="$fetchState.pending">
            <Skeleton
              v-for="(item, index) in 6"
              :key="index"
              height="h-96"
              corner="rounded-xl"
            />
          </template>
          <Card
            v-for="(item, index) in pokemons"
            v-else
            :key="`${index} - ${item.name}`"
            :data="item"
          />
        </div>
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

export default defineComponent({
  name: 'IndexPage',
  fetchOnServer: false,
  setup() {
    const { store } = useContext()

    useFetch(async () => {
      await store.dispatch('fetchPokemons')
    })

    const paginationPokemons = (url: string): void => {
      store.dispatch('fetchPokemons', url)
    }

    const pokemons = computed(() => store.state.pokemons)
    const previous = computed(() => store.state.previous)
    const next = computed(() => store.state.next)

    return {
      pokemons,
      paginationPokemons,
      previous,
      next,
    }
  },
})
</script>
