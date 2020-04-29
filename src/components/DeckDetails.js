import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class DeckDetails extends React.Component {

    render() {
        return (
            <View>
                <Text>Deck Details</Text>
            </View>
        )
    }
}

export default connect()(DeckDetails);