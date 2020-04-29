import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Question extends React.Component {

    render() {
        return (
            <View>
                <Text>Question</Text>
            </View>
        )
    }
}

export default connect()(Question);