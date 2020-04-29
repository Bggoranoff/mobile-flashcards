import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/_storage';

class Deck extends React.Component {

    render() {
        return (
            <View style={[styles.deck, this.props.style]}>
                <Text style={styles.title}>Deck Title</Text>
                <Text style={styles.subtitle}>N cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    subtitle: {
        fontSize: 17,
        color: colors.gray
    },
    deck: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    }
})

export default connect()(Deck);