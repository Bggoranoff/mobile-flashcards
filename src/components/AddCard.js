import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../utils/_storage';
import { handleSaveCard } from '../actions';

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    handleChange = name => text => {
        this.setState({ [name]: text });
    }

    handleSubmit = () => {
        this.props.dispatch(handleSaveCard(this.props.route.params.title, { question: this.state.question, answer: this.state.answer }));
        this.props.navigation.navigate('List');
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Question</Text>
                    <TextInput style={styles.input} placeholder='Add your question' value={this.state.question} onChangeText={this.handleChange('question')}></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Answer</Text>
                    <TextInput style={styles.input} placeholder='Add your answer' value={this.state.answer} onChangeText={this.handleChange('answer')}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
                {Platform.OS === 'ios' && <TouchableOpacity style={styles.deleteLink} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.goBackText}>Back</Text>
                </TouchableOpacity>}
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
    },
    goBackText: {
        color: colors.blue,
        fontSize: 16
    },
    plainLink: {
        fontSize: 22,
        marginTop: 20
    }
});

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(AddCard);