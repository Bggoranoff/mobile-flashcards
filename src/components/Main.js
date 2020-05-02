import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from './DeckList';
import AddCard from './AddCard';
import Deck from './Deck';
import DeckDetails from './DeckDetails';
import Quiz from './Quiz';

export class MainView extends React.Component {
    render() {
        const { Cmp } = this.props.route.params;
        return (
            <View style={styles.container}>
                <Cmp navigation={this.props.navigation} route={this.props.route} />
            </View>
        );
    }
}

const Stack = createStackNavigator();

export class Main extends React.Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='List' component={MainView} initialParams={{ Cmp: DeckList }} />
                <Stack.Screen name='DeckDetails' component={MainView} initialParams={{ Cmp: DeckDetails }} />
                <Stack.Screen name='AddCard' component={MainView} initialParams={{ Cmp: AddCard }} />
                <Stack.Screen name='Deck' component={MainView} initialParams={{ Cmp: Deck }} />
                <Stack.Screen name='Quiz' component={MainView} initialParams={{ Cmp: Quiz }} />
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
