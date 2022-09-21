import { Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getPokemonsFavoriteApi } from '../api/favorite'
import useAuth from '../hooks/useAuth'
import { getPokemonDetail } from '../utils/getPokemonDetail'
import PokemonList from '../components/PokemonList'
import { useFocusEffect } from '@react-navigation/native'

export default function Favorite() {
  const [pokemons, setPokemons] = useState([])
  const { auth } = useAuth()

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        ;(async () => {
          const response = await getPokemonsFavoriteApi()
          const pokemonDetails = await getPokemonDetail(response)
          setPokemons(pokemonDetails)
        })()
      }
    }, [auth])
  )

  return !auth ? (
    <Text>User not logged</Text>
  ) : (
    <PokemonList pokemons={pokemons} />
  )
}
