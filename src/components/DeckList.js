import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Deck from './Deck';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckDetails from './DeckDetails';

const Stack = createStackNavigator();

class DeckList extends React.Component {

    render() {
        return (
            <View style={styles.listContainer}>
                <ScrollView style={styles.list}>
                    <Text style={styles.title}>Your Decks</Text>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    
                </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: Math.round(Dimensions.get('window').width) - 20,
        alignSelf: 'center'
    },
    list: {
        flex: 1,
        width: Math.round(Dimensions.get('window').width)
    },
    title: {
        fontSize: 45,
        marginBottom: 5,
        marginTop: 40,
        alignSelf: 'center'
    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect()(DeckList);