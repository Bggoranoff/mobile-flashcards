import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../utils/_storage'

class AddDeck extends React.Component {
    state = {
        deck: ''
    }

    handleChange = text => {
        this.setState({ deck: text });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Deck Title</Text>
                    <TextInput style={styles.input} placeholder='Add deck title' value={this.state.deck} onChangeText={this.handleChange}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => console.log(this.state.deck)}>
                    <Text style={styles.buttonText}>Add Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 27,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center'
    },
    input: {
        borderColor: colors.gray,
        borderRadius: 5,
        borderWidth: 1.5,
        fontSize: 20,
        padding: 5,
        width: Math.round(0.6*Dimensions.get('window').width)
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Math.round(0.6*Dimensions.get('window').width)
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
})

export default connect()(AddDeck);