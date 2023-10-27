import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstScreen from "./src/screens/FirstScreen";

const App = () => {

  return (
    <SafeAreaProvider>
      <FirstScreen />
    </SafeAreaProvider>
  )

}

export default App;