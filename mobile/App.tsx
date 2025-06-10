import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import WebViewScreen from './src/screens/WebViewScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <WebViewScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
