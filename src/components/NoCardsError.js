import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class NoCardsError extends React.Component {

    render() {
        return (
            <View>
                <Text>No Cards Error</Text>
            </View>
        )
    }
}

export default connect()(NoCardsError);