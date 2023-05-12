import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, {  } from 'react';

import Auth from './components/Auth';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Auth/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
