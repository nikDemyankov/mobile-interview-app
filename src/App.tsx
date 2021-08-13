import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, LogBox } from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import { color } from './ui/theme';
import store from './store';

// Silence require cycle for fetch.
if (__DEV__) {
  LogBox.ignoreLogs(['Require cycle: node_modules/react-native/Libraries/Network/fetch.js']);
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={color.background} />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
