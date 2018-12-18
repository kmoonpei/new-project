import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Variable } from './../Variable';
import { Platform } from 'react-native';

let theme = Variable.Default;
export default function HeaderBar(params = {}, screenProps = {}, navigation = {}) {
    return ({
        title: params.title,
        header: Platform.OS == 'android' ? params.header : <View style={{ height: DevWH.isIponeX ? 35 : 20, backgroundColor: theme.themeColor }}></View>,
        headerRight: params.header_right,
        headerLeft: params.header_left,
        headerTitleStyle: {
            color: theme.hdtxt,
        },
        headerStyle: {
            backgroundColor: theme.themeColor,
        },
        headerTintColor: theme.hdtxt,
        tabBarLabel: ({ focused, tintColor }) => (
            <Text style={[Variable.df, focused ? { color: theme.themeColor } : { color: tintColor }]}>{params.msg}</Text>
        ),
        tabBarIcon: ({ focused, tintColor }) => (
            <Image source={params.Image}
                style={[focused ? { tintColor: theme.themeColor } : { tintColor: tintColor }, Variable.icon]}
            />
        ),
        gesturesEnabled: params.isBack ? false : true,
    })

}