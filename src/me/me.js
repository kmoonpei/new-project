import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from './../common/HeaderBar';

export default class Me extends Component {
    static pars = {
        Image: require('../assets/me.png'),
        msg: 'Me',
    }
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(Me.pars)
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[styles.bg, styles.center]}><Text>me</Text></View>
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