<template>
  <section>
    <div class="px-5 py-14 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-row">
        <div class="w-full space-y-4">
          <nuxt-link class="underline" to="/">Back</nuxt-link>
          <img
            :alt="pokemonDetail.name"
            class="w-full object-cover object-center rounded border border-gray-200 self-start"
            :src="pokemonDetail.sprites.other['official-artwork'].front_default"
          />
        </div>

        <div class="w-full lg:pl-10 lg:py-6 mt-3">
          <h2
            class="text-sm title-font text-gray-500 tracking-widest flex flex-row space-x-2"
          >
            <span v-for="(item, index) in pokemonDetail.types" :key="index">{{
              item.type.name
            }}</span>
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ pokemonDetail.name }}
          </h1>
          <h2
            class="text-sm title-font text-gray-500 tracking-widest flex flex-row space-x-2"
          >
            <span>{{
              `Base experience ${pokemonDetail.base_experience} | Height ${pokemonDetail.height} | Weight ${pokemonDetail.weight}`
            }}</span>
          </h2>

          <div
            class="w-full border rounded-lg shadow-sm mt-4 p-3 text-xs flex flex-row space-x-2"
          >
            <div class="w-full">
              <h2 class="font-bold">Moves</h2>
              <div class="grid grid-cols-2 gap-2">
                <p
                  v-for="(ability, index) in pokemonDetail.abilities"
                  :key="index"
                >
                  {{ ability.ability.name }}
                </p>
              </div>
            </div>

            <div class="w-full">
              <h2 class="font-bold">Stats</h2>
              <div
                v-for="(stat, index) in pokemonDetail.stats"
                :key="index"
                class="grid grid-cols-2 gap-2 space-y-1"
              >
                <span>
                  {{ stat.stat.name }}
                </span>
                <span class="font-bold">
                  {{ stat.base_stat }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="w-full border rounded-lg shadow-sm space-y-2 mt-2 p-3 text-xs"
          >
            <h2 class="font-bold">Moves</h2>
            <div class="grid grid-cols-4 gap-2">
              <p v-for="(move, index) in pokemonDetail.moves" :key="index">
                {{ move.move.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useAsync,
  computed,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PokemonDetail',
  scrollToTop: true,
  fetchOnServer: false,
  setup() {
    const { store, params } = useContext()

    useAsync(async () => {
      await store.dispatch('fetchPokemonDetail', params.value.id)
    })

    const pokemonDetail: any = computed(() => store.state.pokemonDetail)

    return {
      pokemonDetail,
    }
  },
})
</script>

<style lang="postcss" scoped>
section {
  @apply text-gray-700 overflow-hidden bg-white;
}
</style>
