import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi } from '../../api/favorite'

export default function Favorite({ id }) {
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id)
  }

  return (
    <Icon
      name='heart'
      color='#FFF'
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  )
}
