import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({

});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
