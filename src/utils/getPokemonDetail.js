import { getPokemonsDetailsByUrlApi } from "../api/pokemon"

export async function getPokemonDetail(pokemons) {
  const pokemonDetail = []

  for await (const pokemon of pokemons) {
    const identifier = pokemon.url || pokemon
    const pokemonDetails = await getPokemonsDetailsByUrlApi(identifier)
    pokemonDetail.push({
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      type: pokemonDetails.types.map((type) => type.type.name),
      order: pokemonDetails.order,
      image: pokemonDetails.sprites.other['official-artwork'].front_default
    })
  }
  return pokemonDetail
}
