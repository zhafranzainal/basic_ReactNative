import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from './src/screens/HomeScreen'
import GuessTheCountryScreen from "./src/screens/GuessTheCountryScreen";
import WinScreen from "./src/screens/WinScreen";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <WinScreen />
    </SafeAreaProvider>
  )
}

export default App;
