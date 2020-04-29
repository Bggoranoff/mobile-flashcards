import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../utils/_storage';

class Answer extends React.Component {

    render() {
        return (
            <View style={styles.questionDetails}>
                <View style={styles.center}>
                    <Text style={[styles.title, styles.center]}>It does.</Text>
                    <TouchableOpacity>
                        <Text style={styles.switchText}>Question</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.green, borderColor: colors.green}]}>
                        <Text style={styles.buttonText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.red, borderColor: colors.red}]}>
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
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

export default connect()(Answer);