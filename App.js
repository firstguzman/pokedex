import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from './src/context/AuthContext'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
