import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'

import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Favorite'
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Pokedex'
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeBall()
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountNavigation}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

function renderPokeBall() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}
