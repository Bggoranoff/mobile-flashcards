import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class AddCard extends React.Component {

    render() {
        return (
            <View>
                <Text>Add Card</Text>
            </View>
        )
    }
}

export default connect()(AddCard);