/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';


const App = () => {
  return (
    <View style={styles.container}>
      <NetworkProvider shouldPing={true} pingInterval={120}>
        <NetworkConsumer>
          {({ isConnected }) =>
            isConnected ? (
              <Text style={styles.text}>Hello World!</Text>
            ) : (
              <Text> No Network</Text>
            )
          }
        </NetworkConsumer>
      </NetworkProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 20,
    borderColor: 'black',
    height: 55,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});

export default App;
