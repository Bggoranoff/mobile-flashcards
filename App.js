import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import decks from './src/middleware';
import middleware from './src/middleware'
import { StyleSheet, Text, View } from 'react-native';
import AddCard from './src/components/AddCard';
import Deck from './src/components/Deck';
import DeckDetails from './src/components/DeckDetails';
import DeckList from './src/components/DeckList';
import NoCardsError from './src/components/NoCardsError';
import AddDeck from './src/components/AddDeck';
import Card from './src/components/Card';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import Main from './src/components/Main';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Provider store={createStore(decks, middleware)}>
          <Drawer.Navigator initialRouteName="List">
            <Drawer.Screen options={{ drawerLabel: 'Your Decks', drawerIcon: () => <MaterialCommunityIcons name='cards-variant' /> }} name='List' component={Main} initialParams={{ name: 'DeckList' }} />
            <Drawer.Screen options={{ drawerLabel: 'Add Deck', drawerIcon: () => <AntDesign name='plus' /> }} name='AddDeck' component={Main} initialParams={{ name: 'AddDeck' }} />
          </Drawer.Navigator>
        </Provider>
      </NavigationContainer>
  );
}
