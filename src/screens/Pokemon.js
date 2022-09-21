import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Icon from 'react-native-vector-icons/FontAwesome5'
import useAuth from '../hooks/useAuth'
import FavoriteButton from '../components/Pokemon/FavoriteButton'

export default function Pokemon({ navigation, route }) {
  const { params } = route
  const [pokemon, setPokemon] = useState(null)
  const { auth } = useAuth()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <FavoriteButton id={pokemon?.id} /> : null),
      headerLeft: () => (
        <Icon
          name='arrow-left'
          color='#FFF'
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      )
    })
  }, [navigation, route, pokemon, auth])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}
