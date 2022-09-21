import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { getPokemonApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import { getPokemonDetail } from '../utils/getPokemonDetail'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    ;(async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl)

      setNextUrl(response.next)

      const pokemonsArray = await getPokemonDetail(response.results)

      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}
