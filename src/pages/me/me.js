import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HeaderBar from '../../common/HeaderBar';

export default class Me extends Component {
    static pars = {
        header: null
    }
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(Me.pars)
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[styles.bg, styles.center]}>
                <Text>me</Text>
                <Button title='go about' onPress={() => this.props.navigation.navigate('About')} />
            </View>
        )
    }
}

let styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        flex: 1,
        // backgroundColor: '#992266',
    },
})