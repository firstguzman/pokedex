import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
