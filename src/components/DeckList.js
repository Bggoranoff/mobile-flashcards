import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Deck from './Deck';

class DeckList extends React.Component {

    render() {
        return (
            <View style={styles.listContainer}>
                <ScrollView style={styles.list}>
                <Text style={styles.title}>Your Decks</Text>
                <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
                    <View style={styles.hr} />
                    <TouchableOpacity onPress={() => console.log('SEE DECK')}><Deck /></TouchableOpacity>
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