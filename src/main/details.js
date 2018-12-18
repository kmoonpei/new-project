import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Details extends Component {
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
        flex:1,
        // backgroundColor: '#45c',
    },
})