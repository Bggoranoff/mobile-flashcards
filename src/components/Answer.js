import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Answer extends React.Component {

    render() {
        return (
            <View>
                <Text>Answer</Text>
            </View>
        )
    }
}

export default connect()(Answer);