import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import decks from './src/middleware';
import middleware from './src/middleware'
import { StyleSheet, Text, View } from 'react-native';
import AddCard from './src/components/AddCard';
import Answer from './src/components/Answer';
import Deck from './src/components/Deck';
import DeckDetails from './src/components/DeckDetails';
import DeckList from './src/components/DeckList';
import NoCardsError from './src/components/NoCardsError';
import Question from './src/components/Question';

export default function App() {
  return (
    <Provider store={createStore(decks, middleware)}>
      <View style={styles.container}>
        <AddCard />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
