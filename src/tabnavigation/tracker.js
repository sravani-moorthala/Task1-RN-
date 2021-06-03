import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const tracker = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tracker Screen</Text>
    </SafeAreaView>
  );
};
export default tracker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
