import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from './src/screens/HomeScreen'
import GuessTheCountryScreen from "./src/screens/GuessTheCountryScreen";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <GuessTheCountryScreen />
    </SafeAreaProvider>
  )
}

export default App;
