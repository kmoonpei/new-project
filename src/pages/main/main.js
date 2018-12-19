import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HeaderBar from '../../common/HeaderBar';

export default class Main extends Component {
    static pars = {
        header: null
    }
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(Main.pars)

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[styles.bg, styles.center]}>
                <Text>main</Text>
                <Button title='go details' onPress={() => this.props.navigation.navigate('Details')} />
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
        // backgroundColor: '#45c',
    },
})