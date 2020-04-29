import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Deck extends React.Component {

    render() {
        return (
            <View>
                <Text>Deck</Text>
            </View>
        )
    }
}

export default connect()(Deck);