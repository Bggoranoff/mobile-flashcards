import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Deck from './Deck';
import { colors } from '../utils/_storage';

class DeckList extends React.Component {

    render() {
        return (
            <View style={styles.listContainer}>
                <ScrollView style={styles.list}>
                    <Text style={styles.title}>Your Decks</Text>
                    {this.props.decks && Object.keys(this.props.decks).filter(deck => this.props.decks[deck] !== null).length > 0 ? Object.keys(this.props.decks).sort((a, b) => a.localeCompare(b)).map((title, i) => {
                        if (this.props.decks[title] !== null) {
                            return (
                                <View key={i.toFixed()}>
                                    <View style={styles.hr} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', { title: this.props.decks[title].title })}><Deck title={title} /></TouchableOpacity>
                                </View>
                            );
                        }
                    }) : <View style={styles.center}><Text style={styles.text}>You have not added any decks to your collection. Swipe right to create your first flashcards deck.</Text><TouchableOpacity style={styles.button} onPress={() => this.props.navigation.openDrawer()}><Text style={styles.buttonText}>Swipe</Text></TouchableOpacity></View>}
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
    },
    text: {
        color: colors.black,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Math.round(0.25 * (Dimensions.get('window').height > 600 ? 600 : Dimensions.get('window').height))
    },
    button: {
        backgroundColor: colors.black,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 5,
        marginTop: 20,
        padding: 7,
        width: 170,
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center'
    }
});

function mapStateToProps({ decks }) {
    return {
        decks
    };
}

export default connect(mapStateToProps)(DeckList);