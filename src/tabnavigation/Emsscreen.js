import React from 'react';
import {useLayoutEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

const EmsScreen = ({navigation}) => {
  const emslist = () => {
    navigation.navigate('EMS');
  };
  const menu = () => {
    navigation.navigate('EMSSTACKNAVIGATOR');
  };

  const buttonClicked = () => {
    navigation.navigate('ADDCONTACT');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            style={{width: 20, height: 20, margin: 10}}
            source={require('../assets/menu.png')}
          />
        </Pressable>
      ),
      /*headerRight: () => (
        <View style={{flexDirection: 'row', width: 60, height: 35}}>
          { <Button onPress={() => { }} title="Alarm" /> }
          <Button onPress={() => {}} title="Notif" color="skyblue" />
        </View>
      ),*/
    });
  });

  return (
    <SafeAreaView style={StyleSheet.rootStyle}>
      <View
        style={{
          flexDirection: 'row',
          width: 60,
          height: 35,
          justifyContent: 'center',
          alignContent: 'center',
          marginHorizontal: 150,
          marginVertical: 300,
        }}>
        <Pressable onPress={emslist}>
          <Text>EMS</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EmsScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
