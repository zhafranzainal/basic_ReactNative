import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InstagramHomeScreen from "./src/screens/InstagramHomeScreen";

const App = () => {

  return (
    <SafeAreaProvider>
      <InstagramHomeScreen />
    </SafeAreaProvider>
  )

}

export default App;
