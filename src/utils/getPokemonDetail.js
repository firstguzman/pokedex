import {
  getPokemonDetailsApi,
  getPokemonsDetailsByUrlApi
} from '../api/pokemon'

export async function getPokemonDetail(pokemons) {
  const pokemonDetail = []

  for await (const pokemon of pokemons) {
    const identifier = pokemon.url || pokemon
    const pokemonDetails = pokemon.url
      ? await getPokemonsDetailsByUrlApi(identifier)
      : await getPokemonDetailsApi(pokemon)
    pokemonDetail.push({
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      type: pokemonDetails.types[0].type.name,
      order: pokemonDetails.order,
      image: pokemonDetails.sprites.other['official-artwork'].front_default
    })
  }
  return pokemonDetail
}
