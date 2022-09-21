import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite'

export default function FavoriteButton({ id }) {
  const [isFavorite, setIsFavorite] = useState(undefined)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await isPokemonFavoriteApi(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id])

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id)
  }

  const removeFavorite = () => {}

  return (
    <Icon
      name='heart'
      color='#FFF'
      onPress={isFavorite ? removeFavorite : addFavorite}
      solid={isFavorite}
      size={20}
      style={{ marginRight: 20 }}
    />
  )
}
