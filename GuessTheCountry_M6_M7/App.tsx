import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from './src/screens/HomeScreen'

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  )
}

export default App;
