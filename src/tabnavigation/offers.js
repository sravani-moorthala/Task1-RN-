import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const offers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Offers Screen</Text>
    </SafeAreaView>
  );
};
export default offers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
