import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { getPokemonsFavoriteApi } from '../api/favorite'

export default function Favorite() {
  const [favorites, setFavorites] = useState(null)

  useEffect(() => {
    ;(async () => {
      const response = await getPokemonsFavoriteApi()
    })()
  }, [])

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
    </SafeAreaView>
  )
}
