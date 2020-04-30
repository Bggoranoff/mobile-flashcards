import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Deck from './Deck';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../utils/_storage';
import DeckDetails from './DeckDetails';

const Stack = createStackNavigator();

class DeckList extends React.Component {

    render() {
        return (
            <View style={styles.listContainer}>
                <ScrollView style={styles.list}>
                    <Text style={styles.title}>Your Decks</Text>
                    {this.props.decks && this.props.decks.length > 0 ? Object.keys(this.props.decks).sort((a, b) => a.localeCompare(b)).map((title, i) => {
                        if (this.props.decks[title] !== null) {
                            return (
                                <View key={i.toFixed()}>
                                    <View style={styles.hr} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', { title: this.props.decks[title].title })}><Deck title={title} /></TouchableOpacity>
                                </View>
                            );
                        }
                    }) : <View style={styles.center}><Text style={styles.text}>You have not added any decks with flashcards. </Text><TouchableOpacity onPress={() => this.props.navigation.openDrawer()}><Text style={styles.slideText}>Slide</Text></TouchableOpacity><Text style={styles.text}> to create your first one.</Text></View>}
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
    slideText: {
        color: colors.blue,
        fontSize: 20,
        textAlign: 'center'
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
        textAlign: 'center',
        marginTop: Math.round(0.25 * Dimensions.get('window').height)
    }
});

function mapStateToProps({ decks }) {
    return {
        decks
    };
}

export default connect(mapStateToProps)(DeckList);