import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import Main from './../main/main';
import Me from './../me/me';
import Details from './../main/details';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
    Main: Main,
    Me: Me
},
    {
        // defaultNavigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let iconName;
        //         if (routeName === 'Main') {
        //             iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        //         } else if (routeName === 'Me') {
        //             iconName = `ios-options${focused ? '' : '-outline'}`;
        //         }

        //         // You can return any component that you like here! We usually use an
        //         // icon component from react-native-vector-icons
        //         return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });
export default createAppContainer(TabNavigator);

// const MainStack = createStackNavigator({
//     Main: Main,
//     Details: Details,
// });

// const MeStack = createStackNavigator({
//     Me: Me,
//     Details: Details,
// });

// export default createAppContainer(createBottomTabNavigator(
//     {
//         Main: MainStack,
//         Me: MeStack,
//     },
//     {
//         /* Other configuration remains unchanged */
//     }
// ));