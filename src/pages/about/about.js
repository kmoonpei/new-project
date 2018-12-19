import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from './../../common/HeaderBar';

export default class About extends Component {
    static pars = {
        header: null
    }
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(About.pars)
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[styles.bg, styles.center]}><Text>about</Text></View>
        )
    }
}

let styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        flex:1,
        // backgroundColor: '#45c',
    },
})