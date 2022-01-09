import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface PokemonsData {
  name: string;
  url: string;
}

interface FetchParams {
  offset: number,
  limit: number
}

export const state = () => ({
  pokemons: <PokemonsData[]>[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  pokemons: state => state.pokemons,
}

export const mutations: MutationTree<RootState> = {
  SET_POKEMONS: (state, data: any) => (state.pokemons = data)
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPokemons({ commit }, url: string = "https://pokeapi.co/api/v2/pokemon") {
    const res = await this.$axios.$get(url)
    res.results = res.results.map((item: { name: any; url: any }) => {
      return {
        name: item.name,
        url: item.url,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url.split('/')[6]}.png`
      }
    })
    
    commit('SET_POKEMONS', res)
  },
}