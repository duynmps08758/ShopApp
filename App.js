import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from './source/store/Store'
import AppNavigator from './source/helpers/AppNavigator';
import Colors from './source/styles/Colors';

export const initStore = store()

export default function App() {

  useEffect(() => {
  }, []);

  return (
    <Provider store={initStore}>
      <SafeAreaView style={[styles.container]}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});