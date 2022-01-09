import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface PokemonsData {
  name: string;
  url: string;
}

interface PokemonTypes {
  name: string;
  url: string;
}

export const state = () => ({
  pokemons: <PokemonsData[]>[],
  pokemonTypes: <PokemonTypes[]>[],
  previous: null,
  next: null,
  pokemonDetail: {}
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  pokemons: state => state.pokemons,
  pokemonTypes: state => state.pokemonTypes,
  pokemonDetail: state => state.pokemonDetail
}

export const mutations: MutationTree<RootState> = {
  SET_POKEMONS: (state, data: any) => (state.pokemons = data),
  SET_PREVIOUS: (state, data: any) => (state.previous = data),
  SET_NEXT: (state, data: any) => (state.next = data),
  SET_POKEMON_TYPES: (state, data: any) => (state.pokemonTypes = data),
  SET_POKEMON_DETAIL:(state, data:any) => (state.pokemonDetail = data)
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPokemons({ commit }, url: string = `${process.env.POKE_URL}/pokemon`) {
    const { results, pokemon, previous, next } = await this.$axios.$get(url)
    commit('SET_PREVIOUS', previous)
    commit('SET_NEXT', next)
    const data: any = results || pokemon
    
    const pokemons = data.map((item: any) => {
      const {pokemon, url, name} = item
      const id = pokemon ? parseInt(pokemon.url.split('/')[6]) : parseInt(item.url.split('/')[6])
      return {
        id,
        name: pokemon ? pokemon.name : name,
        url: pokemon ? pokemon.url : url,
        img: `${process.env.POKE_URL_IMG}/${id}.png`
      }
    })
    
    commit('SET_POKEMONS', pokemons)
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchPokemonTypes({commit}, url: string = `${process.env.POKE_URL}/type`) {
    const { results } = await this.$axios.$get(url)

    commit('SET_POKEMON_TYPES', results)
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchPokemonDetail({commit}, id: number = 1) {
    const res = await this.$axios.$get(`${process.env.POKE_URL}/pokemon/${id}`)

    commit('SET_POKEMON_DETAIL', res)
  }
}