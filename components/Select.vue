<template>
  <select v-model="type" @change="changeType">
    <option value="default">- Choose pokemon type -</option>
    <option
      v-for="(item, index) in pokemonTypes"
      :key="index"
      :value="item.url"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useFetch,
  computed,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseSelect',
  fetchOnServer: false,
  setup() {
    const { store } = useContext()
    const type = ref('default')

    useFetch(async () => {
      await store.dispatch('fetchPokemonTypes')
    })

    const pokemonTypes = computed(() => store.state.pokemonTypes)

    function changeType(params: any) {
      const url: string = params.target.value

      store.dispatch('fetchPokemons', url)
    }

    return {
      pokemonTypes,
      type,
      changeType,
    }
  },
})
</script>

<style lang="postcss" scoped>
select {
  @apply text-xs border rounded-lg py-2 px-3;
}
</style>
