import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class DeckList extends React.Component {

    render() {
        return (
            <View>
                <Text>Deck List</Text>
            </View>
        )
    }
}

export default connect()(DeckList);