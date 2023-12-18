import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SolarSystemScreen from "./src/screens/SolarSystemScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <SolarSystemScreen />
    </SafeAreaProvider>
  )
}

export default App;
