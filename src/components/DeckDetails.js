import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { colors } from '../utils/_storage';
import Deck from './Deck';
import { handleDeleteDeck } from '../actions';

class DeckDetails extends React.Component {

    deleteDeck = () => {
        this.props.dispatch(handleDeleteDeck(this.props.route.params.title));
        this.props.navigation.navigate('List');
    }

    render() {
        const { title } = this.props.route.params;
        return (
            <View style={styles.details} >
                <Deck style={styles.deck} title={title} />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddCard', { title: title })}>
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Quiz', { title: title })}>
                    <Text style={styles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.plainLink} onPress={this.deleteDeck}>
                    <Text style={styles.deleteText}>Delete Deck</Text>
                </TouchableOpacity>
                {Platform.OS === 'ios' && <TouchableOpacity style={styles.plainLink} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.goBackText}>Back</Text>
                </TouchableOpacity>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    details: {
        marginTop: 12,
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.black,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 5,
        marginTop: 10,
        padding: 7,
        width: 170,
    },
    plainLink: {
        fontSize: 22,
        marginTop: 20
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center'
    },
    deleteText: {
        color: colors.red,
        fontSize: 16
    },
    deck: {
        marginBottom: Math.round(0.15*Dimensions.get('window').height)
    },
    goBackText: {
        color: colors.blue,
        fontSize: 16
    },
});

export default connect()(DeckDetails);