import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../../common/HeaderBar';

export default class Details extends Component {
    static pars = {
        title:'details'
    }
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(Details.pars)
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[styles.bg, styles.center]}><Text>details</Text></View>
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
        // backgroundColor: '#45c',
    },
})