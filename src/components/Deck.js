import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/_storage';

class Deck extends React.Component {

    render() {
        return (
            <View style={[styles.deck, this.props.style]}>
                {this.props.decks[this.props.title] !== null ? (
                    <View>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subtitle}>{this.props.decks[this.props.title].questions.length}</Text>
                    </View>
                ) : null}
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
});

function mapStateToProps({ decks }) {
    return {
        decks
    };
}

export default connect(mapStateToProps)(Deck);