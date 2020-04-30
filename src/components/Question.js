import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../utils/_storage';

class Question extends React.Component {

    render() {
        return (
                <View style={styles.center}>
                    <Text style={[styles.title, styles.center]}>Does React Native work with Android?</Text>
                    <TouchableOpacity onPress={this.props.toggleView}>
                        <Text style={styles.switchText}>Answer</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        padding: 7,
        width: Math.round(0.5*Dimensions.get('window').width),
    },
    switchText: {
        color: colors.red,
        fontSize: 20,
        marginBottom: Math.round(0.03*Dimensions.get('window').height)
    },
    questionDetails: {
        marginTop: 12,
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        marginBottom: Math.round(0.05*Dimensions.get('window').height)
    },
    center: {
        alignItems: 'center',
        textAlign: 'center'
    }
})

export default connect()(Question);