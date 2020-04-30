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
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './src/components/Main';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Provider store={createStore(decks, middleware)}>
          <Drawer.Navigator initialRouteName="List">
            <Drawer.Screen options={{ title: 'Mobile Flashcards'}} name='List' component={Main} initialParams={{ Cmp: DeckList }} />
            <Drawer.Screen name='Deck' component={Main} initialParams={{ Cmp: Deck }} />
            <Drawer.Screen name='Card' component={Main} initialParams={{ Cmp: Card }} />
            <Drawer.Screen name='AddDeck' component={Main} initialParams={{ Cmp: AddDeck }} />
            <Drawer.Screen name='AddCard' component={Main} initialParams={{ Cmp: AddCard }} />
            <Drawer.Screen name='NoCardsError' component={Main} initialParams={{ Cmp: NoCardsError }} />
            <Drawer.Screen name='DeckDetails' component={Main} initialParams={{ Cmp: DeckDetails }} />
          </Drawer.Navigator>
        </Provider>
      </NavigationContainer>
  );
}
