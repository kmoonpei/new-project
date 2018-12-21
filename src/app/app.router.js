import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import Main from '../pages/main/main';
import Me from '../pages/me/me';
import Details from '../pages/main/details';
import About from '../pages/about/about';
import { Variable } from './../Variable';


const MainStack = createStackNavigator({
    Main: Main,
    Details: Details,
    About: About,
});

const MeStack = createStackNavigator({
    Me: Me,
});
const AboutStack = createStackNavigator({
    About: About,
});

export default createAppContainer(createBottomTabNavigator(
    {
        Main: MainStack,
        Me: MeStack,
        About: AboutStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let icon = '';
                if (routeName === 'Main') {
                    icon = require("../assets/main.png");
                } else {
                    icon = require("../assets/me.png");
                }
                return <Image source={icon}
                    style={[{ tintColor: focused ? Variable.Default.themeColor : tintColor }, Variable.icon]}
                />
            },
        }),
        tabBarOptions: {
            activeTintColor: Variable.Default.themeColor,
            inactiveTintColor: 'gray',
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            showLabel: true,
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                borderTopColor: '#e0e0e0',
                borderTopWidth: 1,
            },
            labelStyle: {
                fontSize: 14, // 文字大小
            },
            // indicatorStyle: {
            //     height: 0
            // }
        },  /* Other configuration remains unchanged */
    }
));