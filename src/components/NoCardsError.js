import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

class NoCardsError extends React.Component {

    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.errormsg}>Sorry, you cannot take a quiz because there are no cards in this deck</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    errormsg: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default connect()(NoCardsError);