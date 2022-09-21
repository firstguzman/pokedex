import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorite({ id }) {
  const addFavorite = () => {
    console.log('Add to favorite', id)
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
