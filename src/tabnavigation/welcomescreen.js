import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../tabnavigation/Home';
import Emsscreen from '../tabnavigation/Emsscreen';
import tracker from '../tabnavigation/tracker';
import stock from '../tabnavigation/stock';
import offers from '../tabnavigation/offers';
import Description from '../tabnavigation/Description';
import emslist from '../emslist';
import Sidemenu from '../tabnavigation/Sidemenu';
import addcontact from '../tabnavigation/addcontact';

const welcomescreen = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const EmsscreenStack = createStackNavigator();

const EmsscreenNavigator = () => {
  return (
    <EmsscreenStack.Navigator initialRouteName="Emsscreen">
      <EmsscreenStack.Screen
        name="EMSSCREEN"
        component={Emsscreen}
        options={{headerTitleAlign: 'center'}}
      />
      <EmsscreenStack.Screen name="EMS" component={emslist} />
      <EmsscreenStack.Screen name="DESCRIPTION" component={Description} />
      <EmsscreenStack.Screen name="ADDCONTACT" component={addcontact} />
    </EmsscreenStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidemenu {...props} />}>
      <Drawer.Screen
        name={'EMSSTACKNAVIGATOR'}
        component={EmsscreenNavigator}
      />
    </Drawer.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let imagepath = require('../assets/tracker.png');
          if (route.name == 'HOME') {
            imagepath = require('../assets/home.png');
          } else if (route.name == 'EMSSCREEN') {
            imagepath = require('../assets/EMS.png');
          } else if (route.name == 'TRACKER') {
            imagepath = require('../assets/tracker.png');
          } else if (route.name == 'STOCK') {
            imagepath = require('../assets/stock.png');
          } else if (route.name == 'OFFERS') {
            imagepath = require('../assets/offers.png');
          }
          return <Image style={{width: 20, height: 20}} source={imagepath} />;
        },
      })}
      tabBarOptions={{activeTintColor: 'red', inactiveTintColor: 'green'}}>
      <Tab.Screen name="HOME" component={Home} />
      <Tab.Screen name="EMSSCREEN" component={DrawerNavigator} />
      <Tab.Screen name="TRACKER" component={tracker} />
      <Tab.Screen name="STOCK" component={stock} />
      <Tab.Screen name="OFFERS" component={offers} />
    </Tab.Navigator>
  );
};

export default welcomescreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'black',
  },
});
