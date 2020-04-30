import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

function Main(props) {
    const { Cmp } = props.route.params;
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Cmp navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main;