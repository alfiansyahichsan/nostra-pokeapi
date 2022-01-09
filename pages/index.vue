<template>
  <div>
    <Hero />

    <section>
      <div
        v-if="$fetchState.pending"
        class="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <Skeleton height="h-80" corner="rounded-xl" />
        <Skeleton height="h-80" corner="rounded-xl" />
        <Skeleton height="h-80" corner="rounded-xl" />
      </div>
      <div
        v-else
        class="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:px-28"
      >
        <Card
          v-for="(item, index) in pokemons.results"
          :key="index"
          :title="item.name"
          :url="item.url"
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

    const paginationPokemons = (): void => {
      store.dispatch('fetchPokemons')
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

<style lang="postcss" scoped>
.pokemon-container {
  display: grid;
  grid-template-columns: repeat(5, 6.5rem);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(2, 6.5rem);
    gap: 2rem;
  }
}

.container {
  padding: 0 10rem;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0 1rem;
  }
}

.pokemon-type {
  padding: 5px;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
}

.header {
  display: grid;
  grid-template-columns: repeat(2, 15rem);
  gap: 1rem;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(2, 10rem);
    gap: 2rem;
  }
}

.flex {
  display: flex;
}

.mr {
  margin-right: 0.5rem;
}

.sm-hide {
  @media (min-width: 320px) and (max-width: 480px) {
    visibility: hidden;
  }
}
</style>
