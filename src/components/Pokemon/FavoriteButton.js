import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite'

export default function FavoriteButton({ id }) {
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadCheck, setReloadCheck] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await isPokemonFavoriteApi(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck(!reloadCheck)
  }

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id)
      onReloadCheckFavorite()
    } catch (error) {
      console.error(console.error)
    }
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
