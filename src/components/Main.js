import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { handleInitialData } from '../actions';
import DeckList from './DeckList';
import AddCard from './AddCard';
import Deck from './Deck';
import DeckDetails from './DeckDetails';
import NoCardsError from './NoCardsError';
import Card from './Card'
import AddDeck from './AddDeck';

export class MainView extends React.Component {
    render() {
        const { Cmp, forcedNavigation } = this.props.route.params;
        return (
            <View style={styles.container}>
                <Cmp navigation={this.props.navigation} route={this.props.route} forcedNavigation={forcedNavigation} />
            </View>
        );
    }
}

const Stack = createStackNavigator();

export class Main extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='List' component={MainView} initialParams={{ Cmp: DeckList }} />
                <Stack.Screen name='DeckDetails' component={MainView} initialParams={{ Cmp: DeckDetails }} />
                <Stack.Screen name='AddCard' component={MainView} initialParams={{ Cmp: AddCard }} />
                <Stack.Screen name='Deck' component={MainView} initialParams={{ Cmp: Deck }} />
                <Stack.Screen name='Card' component={MainView} initialParams={{ Cmp: Card }} />
            </Stack.Navigator>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
